import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FooterNavigationLinks } from '@/constants';
import { Paths } from '@/enums';

import { Navigation } from '../Navigation';
import { IconButton } from '../IconButton';
import styles from './styles.module.scss';
import { scrollToTop } from '@/utils/scrollToTop';
import { useTheme } from '@/hooks/useTheme';
import logoLigthMode from '@/assets/images/icons/nice-gadgets-logo.svg';
// eslint-disable-next-line max-len
import logoDarkMode from '@/assets/images/icons/dark-mode/nice-gadgets-logo.svg';
import { Themes } from '@/enums/Themes';

export const Footer = () => {
  const { t } = useTranslation();

  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link to={Paths.HOME} className={styles.logo}>
          <img
            src={theme === Themes.DARK ? logoDarkMode : logoLigthMode}
            alt="Nice gadgets logo"
            className={styles.logoImage}
            onClick={scrollToTop}
          ></img>
        </Link>

        <Navigation links={FooterNavigationLinks} isFooter={true} />

        <div className={styles.backToTopContainer}>
          <span className={styles.backToTopLabel}>{t('toTop')}</span>
          <IconButton icon="arrow-top" onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
};
