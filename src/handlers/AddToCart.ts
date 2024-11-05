import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import { addToCart } from '../features/Cart/CartSlice';
import { Product } from '../types/Phone';

export const useAddCartButton = (product: Product) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Use an effect to log the cart whenever it updates
  useEffect(() => {
    console.log('Updated cart:', cart);
  }, [cart]); // Only run this effect when cart changes

  return handleAddToCart;
};
