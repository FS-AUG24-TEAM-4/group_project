import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';

import logoLigthMode from '@/assets/images/icons/nice-gadgets-logo.svg';
// eslint-disable-next-line max-len
import logoDarkMode from '@/assets/images/icons/dark-mode/nice-gadgets-logo.svg';
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

const getIconLinkClassName = (
  { isActive }: { isActive: boolean },
  baseClass: string,
) =>
  cn(styles.iconLink, baseClass, {
    [styles.isActive]: isActive,
  });

export const Header = () => {
  const dispatch = useDispatch();
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
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
        <div className={styles.themeButton}>
          <ThemeToggle />
        </div>

        <div className={(styles.lang, styles.iconLink)}>
          <LangSelector />
        </div>

        <NavLink
          to={Paths.FAVORITES}
          className={navData => getIconLinkClassName(navData, styles.favorites)}
        >
          {!!favItemsCount && (
            <div className={styles.indicator}>
              <Indicator>{favItemsCount}</Indicator>
            </div>
          )}
        </NavLink>

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
