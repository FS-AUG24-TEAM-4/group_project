import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import { getFavoritesProducts } from '@/utils';
import { BreadCrumbs, ProductsList, EmptyPage } from '@/components';

import styles from './styles.module.scss';

export const FavPage = () => {
  const fav = useSelector((state: RootState) => state.favorites);

  const favProducts = getFavoritesProducts(fav.items);

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs />
      </div>

      <h1 className={styles.title}>Favorites</h1>

      {!!favProducts.length ? (
        <>
          <p className={styles.counter_text}>{favProducts.length} models</p>

          <ProductsList paginationOfDevice={favProducts} />
        </>
      ) : (
        <EmptyPage title="Nothing here yet." background="favorites" />
      )}
    </div>
  );
};
