import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Paths } from '@/enums';
import { getCapitalizedWord } from '@/utils';

import styles from './styles.module.scss';
import homeIconLightMode from '@/assets/images/icons/home.svg';
import homeIconDarkMode from '@/assets/images/icons/dark-mode/home.svg';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/useTheme';
import { Themes } from '@/enums/Themes';

interface Props {
  productName?: string;
}

export const BreadCrumbs: FC<Props> = ({ productName }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const pages = pathname.split('/').slice(1);

  const { theme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <Link to={Paths.HOME}>
        <img
          className={styles.homeIcon}
          src={theme === Themes.DARK ? homeIconDarkMode : homeIconLightMode}
          alt="Home"
        />
      </Link>

      {pages.map((page, index) => {
        const isCurrentPage = index === pages.length - 1;
        const nameOfPageInBreadCrumbs = getCapitalizedWord(t(page));

        return (
          <div className={styles.pageBlock} key={page}>
            <div className={styles.arrowIcon}></div>

            {isCurrentPage ? (
              <span className={styles.currentPage}>
                {productName ? productName : nameOfPageInBreadCrumbs}
              </span>
            ) : (
              <Link
                className={styles.previousPage}
                to={pathname.slice(0, pathname.lastIndexOf('/'))}
              >
                {getCapitalizedWord(t(page))}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};
