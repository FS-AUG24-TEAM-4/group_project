import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../features/favorites/favoritesSlice';
import { Product } from '@/types/Product';
import { RootState } from '@/app/store';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const toggleFavorite = (product: Product) => {
    const isFavorite = !!favorites[product.id];

    const handleToggleFavorite = () => {
      if (isFavorite) {
        dispatch(removeFromFavorites(product.id));
      } else {
        dispatch(addToFavorites(product));
      }
    };

    return { handleToggleFavorite, isFavorite };
  };

  return { toggleFavorite };
};
