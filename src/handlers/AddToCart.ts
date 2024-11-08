import { useDispatch } from 'react-redux';

import { addToCart } from '@/features/сart/сartSlice';
import { Product } from '@/types';

export const useAddCartButton = (product: Product) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return handleAddToCart;
};
