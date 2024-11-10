import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Paths } from '@/enums';
import { getCapitalizedWord } from '@/utils';

import styles from './styles.module.scss';
import homeIcon from '@/assets/images/icons/home.svg';

interface Props {
  productName?: string;
}

export const BreadCrumbs: FC<Props> = ({ productName }) => {
  const { pathname } = useLocation();

  const pages = pathname.split('/').slice(1);

  return (
    <div className={styles.wrapper}>
      <Link to={Paths.HOME}>
        <img className={styles.homeIcon} src={homeIcon} alt="Home" />
      </Link>

      {pages.map((page, index) => {
        const isCurrentPage = index === pages.length - 1;

        return (
          <div className={styles.pageBlock} key={page}>
            <div className={styles.arrowIcon}></div>

            {isCurrentPage ? (
              <span className={styles.currentPage}>
                {productName ? productName : getCapitalizedWord(page)}
              </span>
            ) : (
              <Link to={pathname.slice(0, pathname.lastIndexOf('/'))}>
                {getCapitalizedWord(page)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};
