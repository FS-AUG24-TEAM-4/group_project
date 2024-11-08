import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  addToCart,
  updateQuantity,
} from '../features/сart/сartSlice';
import { Product } from '@/types/Product';

export const useCart = () => {
  const dispatch = useDispatch();

  const addCartButton = (product: Product) => {
    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };

    return handleAddToCart;
  };

  const removeFromCartButton = () => {
    const handleRemove = (itemId: number) => {
      dispatch(removeFromCart(itemId));
    };

    return handleRemove;
  };

  const updateCartQuantity = (itemId: number) => {
    const handleChangeQuantity = (quantity: number) => {
      dispatch(updateQuantity({ itemId, quantity }));
    };

    return handleChangeQuantity;
  };

  return { addCartButton, removeFromCartButton, updateCartQuantity };
};
