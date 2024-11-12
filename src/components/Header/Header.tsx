import cn from 'classnames';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '@/assets/images/icons/nice-gadgets-logo.svg';
import searchIcon from '@/assets/images/icons/search-icon.svg';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { HeaderNavigationLinks } from '@/constants';
import { RootState } from '@/app/store';
import { Paths } from '@/enums';

import { Navigation } from '../Navigation';
import styles from './styles.module.scss';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';

const getIconLinkClassName = (
  { isActive }: { isActive: boolean },
  baseClass: string,
) =>
  cn(styles.iconLink, baseClass, {
    [styles.isActive]: isActive,
  });

export const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [isSearchVisible, setSearchVisible] = useState(false);

  const dispatch = useDispatch();
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery('');

    return navigate(`${Paths.SEARCH}?searchQuery=${query}`);
  };

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
      <div className={styles.searchContainer}>
        <form onSubmit={event => handleSubmit(event)}>
          <InputBase
            className={cn(styles.queryField, {
              [styles.visible]: isSearchVisible,
            })}
            placeholder="Search"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(event.target.value);
            }}
          />
        </form>
        <img
          src={searchIcon}
          alt="search-icon"
          onClick={() => setSearchVisible(prev => !prev)}
          className={styles.searchIcon}
        />
      </div>
      <div className={styles.iconLinksContainer}>
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
