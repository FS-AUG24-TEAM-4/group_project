import cn from 'classnames';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import { getFavoritesProducts, getCountOfProducts } from '@/utils';
import { BreadCrumbs, ProductsList, EmptyPage } from '@/components';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const FavPage = () => {
  const fav = useSelector((state: RootState) => state.favorites);
  const { t } = useTranslation();

  const favProducts = getFavoritesProducts(fav.items);
  const isFavEmpty = !!favProducts.length;

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapperFilled]: isFavEmpty,
      })}
    >
      <div className={styles.breadCrumbs}>
        <BreadCrumbs />
      </div>

      <h1 className={styles.title}>{t('favorites')}</h1>

      {isFavEmpty ? (
        <>
          <p className={styles.counter_text}>
            {getCountOfProducts(favProducts)}
          </p>
          <ProductsList paginationOfDevice={favProducts} />
        </>
      ) : (
        <EmptyPage title={t('noFavorites')} background="favorites" />
      )}
    </div>
  );
};
