import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { HeaderNavigationLinks } from '@/constants';

import fav from '@/assets/images/icons/favorites-blank.svg';
import cart from '@/assets/images/icons/shopping-bag-blank.svg';

import styles from './styles.module.scss';

import { AuthButton } from '../AuthButton';
import { Indicator } from '../Indicator/Indicator';
import { RootState } from '@/app/store';
import { getCartProducts, getCartProductsQuantity } from '@/utils';
import { Paths } from '@/enums';
import { LangSelector } from '../LangSelector/LangSelector';
import { useTranslation } from 'react-i18next';

const getActiveNavLinkOnBurger = ({ isActive }: { isActive: boolean }) => {
  return classNames(styles.burger__nav__links, {
    [styles.burger__nav__links__active]: isActive,
  });
};

const getActiveNavLinkOnBurgerFooter = ({
  isActive,
}: {
  isActive: boolean;
}) => {
  return classNames(styles.burger__footer__links, {
    [styles.burger__footer__links__active]: isActive,
  });
};

export const BurgerMenu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const favItems = useSelector((state: RootState) => state.favorites.items);
  const favItemsCount = Object.keys(favItems).length;

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartProducts = getCartProducts(cartItems);
  const cartItemsCount = getCartProductsQuantity(cartProducts);

  return (
    <menu className={styles.burger}>
      <div className={styles.container}>
        <nav className={styles.burger__nav}>
          <LangSelector />

          {HeaderNavigationLinks.map(nav => (
            <NavLink
              key={nav.title}
              onClick={() => dispatch(changeBurgerState())}
              className={getActiveNavLinkOnBurger}
              to={nav.route}
            >
              {t(nav.title)}
            </NavLink>
          ))}
        </nav>
      </div>

      <footer className={styles.burger__footer}>
        <NavLink
          onClick={() => dispatch(changeBurgerState())}
          to={Paths.FAVORITES}
          className={getActiveNavLinkOnBurgerFooter}
        >
          <img
            className={styles.burger__footer__links__fav}
            src={fav}
            alt="fav-icon"
          />
          {!!favItemsCount && (
            <div className={styles.indicator}>
              <Indicator>{favItemsCount}</Indicator>
            </div>
          )}
        </NavLink>

        <NavLink
          onClick={() => dispatch(changeBurgerState())}
          to={Paths.CART}
          className={getActiveNavLinkOnBurgerFooter}
        >
          <img
            className={styles.burger__footer__links__cart}
            src={cart}
            alt="cart-icon"
          />
          {!!cartItemsCount && (
            <div className={styles.indicator}>
              <Indicator>{cartItemsCount}</Indicator>
            </div>
          )}
        </NavLink>
        <AuthButton className={styles.burger__footer__links} type={'burger'} />
      </footer>
    </menu>
  );
};
