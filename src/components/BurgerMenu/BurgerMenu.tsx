import styles from './styles.module.scss';
import close_menu_icon from '../../assets/icons/close-menu-icon.png';
import fav from '../../assets/icons/fav-icon.png';
import logo from '../../assets/icons/logo.png';
import cart from '../../assets/icons/shop-cart-icon.png';
import { Paths } from '@/enums';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';

export const BurgerMenu = () => {
  const dispatch = useDispatch();

  return (
    <menu className={styles.burger}>
      <div className={styles.container}>
        <header className={styles.burger__header}>
          <NavLink className={styles.burger__header__img} to={Paths.HOME}>
            <img
              className={styles.burger__logo}
              src={logo}
              alt="nice-gadgets_logo"
            />
          </NavLink>

          <div
            onClick={() => dispatch(changeBurgerState())}
            className={styles.burger__header__button}
          >
            <img
              className={styles.burger__header__button__icon}
              src={close_menu_icon}
              alt="close-menu-icon"
            />
          </div>
        </header>

        <nav className={styles.burger__nav}>
          <NavLink
            className={styles.burger__nav__links__active}
            to={Paths.HOME}
          >
            Home
          </NavLink>

          <NavLink className={styles.burger__nav__links} to={Paths.PHONES}>
            Phones
          </NavLink>

          <NavLink className={styles.burger__nav__links} to={Paths.TABLETS}>
            Tablets
          </NavLink>

          <NavLink className={styles.burger__nav__links} to={Paths.ACCESSORIES}>
            Accessories
          </NavLink>
        </nav>
      </div>

      <footer className={styles.burger__footer}>
        <NavLink
          to="/group_project/fav"
          className={styles.burger__footer__links__active}
        >
          <img
            className={styles.burger__footer__links__fav}
            src={fav}
            alt="fav-icon"
          />
        </NavLink>

        <NavLink
          to="/group_project/cart"
          className={styles.burger__footer__links}
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
