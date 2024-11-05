import styles from './styles.module.scss';
import close_menu_icon from '../../assets/icons/close-menu-icon.png';
import fav from '../../assets/icons/fav-icon.png';
import logo from '../../assets/icons/logo.png';
import cart from '../../assets/icons/shop-cart-icon.png';

{
  /* all 'a' tags gonna be rewrote on NavLink */
}

export const BurgerMenu = () => {
  return (
      <menu className={styles.burger}>
        <div className={styles.container}>
          <header className={styles.burger__header}>
            <a className={styles.burger__header__img} href="/group_project/">
              <img
                className={styles.burger__logo}
                src={logo}
                alt="nice-gadgets_logo"
              />
            </a>

            <div className={styles.burger__header__button}>
              <img
                className={styles.burger__header__button__icon}
                src={close_menu_icon}
                alt="close-menu-icon"
              />
            </div>
          </header>

          <nav className={styles.burger__nav}>
            <a className={styles.burger__nav__links__active} href="/">
              Home
            </a>

            <a
              className={styles.burger__nav__links}
              href="/group_project/phones"
            >
              Phones
            </a>

            <a
              className={styles.burger__nav__links}
              href="/group_project/tablets"
            >
              Tablets
            </a>

            <a
              className={styles.burger__nav__links}
              href="/group_project/accessories"
            >
              Accessories
            </a>
          </nav>
        </div>

        <footer className={styles.burger__footer}>
          <a
            href="/group_project/fav"
            className={styles.burger__footer__links__active}
          >
            <img
              className={styles.burger__footer__links__fav}
              src={fav}
              alt="fav-icon"
            />
          </a>

          <a
            href="/group_project/cart"
            className={styles.burger__footer__links}
          >
            <img
              className={styles.burger__footer__links__cart}
              src={cart}
              alt="cart-icon"
            />
          </a>
        </footer>
      </menu>
  );
};
