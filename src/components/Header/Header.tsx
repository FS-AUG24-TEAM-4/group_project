import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { RootState } from '@/app/store';

import logoLigthMode from '@/assets/images/icons/nice-gadgets-logo.svg';
// eslint-disable-next-line max-len
import logoDarkMode from '@/assets/images/icons/dark-mode/nice-gadgets-logo.svg';
import close from '@/assets/images/icons/close.svg';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { HeaderNavigationLinks } from '@/constants';
import { Paths } from '@/enums';
import { getCartProducts, getCartProductsQuantity } from '@/utils';

import { Navigation } from '../Navigation';
import styles from './styles.module.scss';
import { Indicator } from '../Indicator';
import { LangSelector } from '../LangSelector/LangSelector';
import { ThemeToggle } from '../ThemeToogle';
import { useTheme } from '@/hooks/useTheme';
import { Themes } from '@/enums/Themes';
import { AuthButton } from '../AuthButton/';

import { useProducts, useSearchBar } from '@/hooks';
import { useTranslation } from 'react-i18next';

const getIconLinkClassName = (
  { isActive }: { isActive: boolean },
  baseClass: string,
) =>
  cn(styles.iconLink, baseClass, {
    [styles.isActive]: isActive,
  });

export const Header = () => {
  const { t } = useTranslation();

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
  const favItems = useSelector((state: RootState) => state.favorites.items);
  const favItemsCount = Object.keys(favItems).length;

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartProducts = getCartProducts(cartItems);
  const cartItemsCount = getCartProductsQuantity(cartProducts);

  const { theme } = useTheme();

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
            src={theme === Themes.DARK ? logoDarkMode : logoLigthMode}
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
          onClick={() => {
            if (burgerstatus) {
              dispatch(changeBurgerState());
            }
          }}
        />

        <div className={styles.searchContainer}>
          <form
            className={styles.queryFieldContainer}
            onSubmit={event => {
              handleSubmit(event);
              setSearchVisible(false);
            }}
          >
            <InputBase
              className={cn(styles.queryField, {
                [styles.visible]: isSearchVisible,
              })}
              placeholder={t('Search')}
              value={query}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setQuery(event.target.value.trimStart());
              }}
            />

            {query && (
              <div
                className={styles.queryField__clearButton}
                onClick={() => setQuery('')}
              >
                <img src={close} alt="delete query" />
              </div>
            )}

            <div
              className={cn({
                [styles.queryField__list]: query,
                [styles.queryField__list__off]: !query,
              })}
            >
              <ul>
                {foundProducts.length ? (
                  <>
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
                          style={{ height: '38px', marginRight: '8px' }}
                        />
                        {product.name}
                      </li>
                    ))}
                  </>
                ) : (
                  <li className={styles.queryField__list__element__empty}>
                    {t('noDevicesFound')}
                  </li>
                )}
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

        <div className={styles.themeButton}>
          <ThemeToggle />
        </div>

        <div className={styles.lang}>
          <LangSelector />
        </div>

        <div>
          <NavLink
            to={Paths.FAVORITES}
            className={navData =>
              getIconLinkClassName(navData, styles.favorites)
            }
          >
            {!!favItemsCount && (
              <div className={styles.indicator}>
                <Indicator>{favItemsCount}</Indicator>
              </div>
            )}
          </NavLink>
        </div>

        <NavLink
          to={Paths.CART}
          className={navData =>
            getIconLinkClassName(navData, styles.shoppingBag)
          }
        >
          {!!cartItemsCount && (
            <div className={styles.indicator}>
              <Indicator>{cartItemsCount}</Indicator>
            </div>
          )}
        </NavLink>

        <AuthButton className={styles.iconLink} />

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
