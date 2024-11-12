import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '@/assets/images/icons/nice-gadgets-logo.svg';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { HeaderNavigationLinks } from '@/constants';
import { RootState } from '@/app/store';
import { Paths } from '@/enums';

import { Navigation } from '../Navigation';
import styles from './styles.module.scss';
import { AuthButton } from '../AuthButton/AuthButton';

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
          to={Paths.FAVORITES}
          className={navData => getIconLinkClassName(navData, styles.favorites)}
        ></NavLink>
        <NavLink
          to={Paths.CART}
          className={navData =>
            getIconLinkClassName(navData, styles.shoppingBag)
          }
        ></NavLink>
        <AuthButton className={styles.iconLink} />;
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
