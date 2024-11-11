import { RootState } from '@/app/store';
import { getFavoritesProducts } from '@/utils/getFavoritesProducts';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

export const FavPage = () => {
  const fav = useSelector((state: RootState) => state.favorites);

  const favProducts = getFavoritesProducts(fav.items);

  return (
    <>
      {favProducts.map(prod => {
        return (
          <>
            <img
              src={`${prod.image}`}
              alt={prod.name}
              className={styles.picture}
            />
          </>
        );
      })}
    </>
  );
};
