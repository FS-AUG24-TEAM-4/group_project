import { Link } from 'react-router-dom';

import logo from '@/assets/images/icons/nice-gadgets-logo.svg';
import { FooterNavigationLinks } from '@/constants';
import { Paths } from '@/enums';

import { Navigation } from '../Navigation';
import { IconButton } from '../IconButton';
import styles from './styles.module.scss';
import { scrollToTop } from '@/utils/scrollToTop';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link to={Paths.HOME} className={styles.logo}>
          <img
            src={logo}
            alt="Nice gadgets logo"
            className={styles.logoImage}
          ></img>
        </Link>
        <Navigation links={FooterNavigationLinks} isFooter={true} />
        <div className={styles.backToTopContainer}>
          <span className={styles.backToTopLabel}>Back to top</span>
          <IconButton icon="arrow-top" onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
};
