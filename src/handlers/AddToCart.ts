import { useDispatch } from 'react-redux';

import { addToCart } from '../features/Cart/CartSlice';
import { Product } from '@/types/Product';

export const useAddCartButton = (product: Product) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return handleAddToCart;
};
