import cn from 'classnames';
import { Link } from 'react-router-dom';

import logo from '@/assets/images/icons/nice-gadgets-logo.svg';
import { HeaderNavigationLinks } from '@/constants';
import { Paths } from '@/enums';

import { Navigation } from '../Navigation';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link to={Paths.HOME} className={styles.logo}>
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
      </div>
    </header>
  );
};