import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';

import logo from '@/assets/images/icons/nice-gadgets-logo.svg';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { HeaderNavigationLinks } from '@/constants';
import { RootState } from '@/app/store';
import { Paths } from '@/enums';

import { Navigation } from '../Navigation';
import styles from './styles.module.scss';

import { useSearchBar } from '@/hooks/useSearchBar';
import { useProducts } from '@/hooks';

const getIconLinkClassName = (
  { isActive }: { isActive: boolean },
  baseClass: string,
) =>
  cn(styles.iconLink, baseClass, {
    [styles.isActive]: isActive,
  });

export const Header = () => {
  const { query, setQuery, handleSubmit, navigate } = useSearchBar();
  const { products } = useProducts();
  const [isSearchVisible, setSearchVisible] = useState(false);

  const dispatch = useDispatch();
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  const foundProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase().trimStart()),
  );

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link
          onClick={() => {
            if (burgerstatus) {
              dispatch(changeBurgerState());
            }
          }}
          to={Paths.HOME}
          className={styles.logo}
        >
          <img
            src={logo}
            alt="Nice gadgets logo"
            className={styles.logoImage}
          ></img>
        </Link>
        <Navigation links={HeaderNavigationLinks} />
      </div>

      <div className={styles.iconLinksContainer}>
        <NavLink
          to={Paths.SEARCH}
          className={navData =>
            getIconLinkClassName(navData, styles.queryFieldMobile)
          }
        />
        <div className={styles.searchContainer}>
          <form
            onSubmit={event => {
              handleSubmit(event);
              setSearchVisible(false);
            }}
          >
            <InputBase
              className={cn(styles.queryField, {
                [styles.visible]: isSearchVisible,
              })}
              placeholder="Search"
              value={query}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setQuery(event.target.value.trimStart());
              }}
            />
            <div
              className={cn({
                [styles.queryField__list]: query,
                [styles.queryField__list__off]: !query,
              })}
            >
              <ul>
                {foundProducts.map(product => (
                  <li
                    className={styles.queryField__list__element}
                    key={product.id}
                    onClick={() => {
                      navigate(`/${product.category}/${product.itemId}`);
                      setQuery('');
                      setSearchVisible(false);
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ height: '40px', marginRight: '8px' }}
                    />
                    {product.name}
                  </li>
                ))}
              </ul>
            </div>
          </form>
          <div
            onClick={() => {
              setSearchVisible(prev => !prev);
              setQuery('');
            }}
            className={cn(styles.iconLink, {
              [styles.searchIcon]: true,
            })}
          ></div>
        </div>
        <NavLink
          to={Paths.FAVORITES}
          className={navData => getIconLinkClassName(navData, styles.favorites)}
        ></NavLink>
        <NavLink
          to={Paths.CART}
          className={navData =>
            getIconLinkClassName(navData, styles.shoppingBag)
          }
        ></NavLink>
        <div
          onClick={() => dispatch(changeBurgerState())}
          className={cn(styles.iconLink, {
            [styles.burgerMenu]: !burgerstatus,
            [styles.burgerMenuActive]: burgerstatus,
          })}
        ></div>
      </div>
    </header>
  );
};
