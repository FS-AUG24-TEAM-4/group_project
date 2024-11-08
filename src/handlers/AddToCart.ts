import { useDispatch } from 'react-redux';

import { addToCart } from '../features/Cart/CartSlice';
import { Device } from '@/types/Product';

export const useAddCartButton = (product: Device) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return handleAddToCart;
};
