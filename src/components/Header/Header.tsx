import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '@/assets/images/icons/nice-gadgets-logo.svg';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { HeaderNavigationLinks } from '@/constants';
import { Navigation } from '../Navigation';
import { RootState } from '@/app/store';
import { Paths } from '@/enums';

import styles from './styles.module.scss';

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
        <Link
          to={Paths.FAVORITES}
          className={cn(styles.iconLink, styles.favorites)}
        ></Link>
        <Link
          to={Paths.CART}
          className={cn(styles.iconLink, styles.shopingBag)}
        ></Link>
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
