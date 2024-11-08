import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { HeaderNavigationLinks } from '@/constants';

import fav from '@/assets/images/icons/favorites-blank.svg';
import cart from '@/assets/images/icons/shopping-bag-blank.svg';

import styles from './styles.module.scss';

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
  const dispatch = useDispatch();

  return (
    <menu className={styles.burger}>
      <div className={styles.container}>
        <nav className={styles.burger__nav}>
          {HeaderNavigationLinks.map(nav => (
            <NavLink
              key={nav.title}
              onClick={() => dispatch(changeBurgerState())}
              className={getActiveNavLinkOnBurger}
              to={nav.route}
            >
              {nav.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <footer className={styles.burger__footer}>
        <NavLink
          onClick={() => dispatch(changeBurgerState())}
          to="/fav"
          className={getActiveNavLinkOnBurgerFooter}
        >
          <img
            className={styles.burger__footer__links__fav}
            src={fav}
            alt="fav-icon"
          />
        </NavLink>

        <NavLink
          onClick={() => dispatch(changeBurgerState())}
          to="/cart"
          className={getActiveNavLinkOnBurgerFooter}
        >
          <img
            className={styles.burger__footer__links__cart}
            src={cart}
            alt="cart-icon"
          />
        </NavLink>
      </footer>
    </menu>
  );
};
