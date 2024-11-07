import styles from './styles.module.scss';
import fav from '../../assets/icons/fav-icon.png';
import cart from '../../assets/icons/shop-cart-icon.png';
import { Paths } from '@/enums';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import classNames from 'classnames';

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
          <NavLink
            onClick={() => dispatch(changeBurgerState())}
            className={getActiveNavLinkOnBurger}
            to={Paths.HOME}
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => dispatch(changeBurgerState())}
            className={getActiveNavLinkOnBurger}
            to={Paths.PHONES}
          >
            Phones
          </NavLink>

          <NavLink
            onClick={() => dispatch(changeBurgerState())}
            className={getActiveNavLinkOnBurger}
            to={Paths.TABLETS}
          >
            Tablets
          </NavLink>

          <NavLink
            onClick={() => dispatch(changeBurgerState())}
            className={getActiveNavLinkOnBurger}
            to={Paths.ACCESSORIES}
          >
            Accessories
          </NavLink>
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
