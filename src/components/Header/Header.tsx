import cn from 'classnames';
import { Link } from 'react-router-dom';

import logo from '@/assets/images/icons/nice-gadgets-logo.svg';
import { HeaderNavigationLinks } from '@/constants';

import { Navigation } from '../Navigation';
import styles from './styles.module.scss';

export const Header = () => {
    return <header className={styles.header}>
        <div className={styles.navContainer}>
            <Link to='/' className={styles.logo}>
                <img src={logo} alt='Nice gadgets logo' className={styles.logoImage}></img>
            </Link>
            <Navigation links={HeaderNavigationLinks}/>
        </div>
        <div>
            <Link 
              to="/favorites" 
              className={cn(styles.iconLink, styles.favorites)}
            >
            </Link>
            <Link 
              to="/cart" 
              className={cn(styles.iconLink, styles.shopingBag)}
            >
            </Link>
        </div>
    </header>
};