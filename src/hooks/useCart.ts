import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/сart/сartSlice';
import { addToCart } from '../features/сart/сartSlice';
import { updateQuantity } from '../features/сart/сartSlice';
import { Device } from '@/types/Device';

export const useCart = () => {
  const dispatch = useDispatch();

  const addCartButton = (product: Device) => {
    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };

    return handleAddToCart;
  };

  const removeFromCartButton = () => {
    const handleRemove = (itemId: string) => {
      dispatch(removeFromCart(itemId));
    };

    return handleRemove;
  };

  const updateCartQuantity = (itemId: string) => {
    const handleChangeQuantity = (quantity: number) => {
      dispatch(updateQuantity({ itemId, quantity }));
    };

    return handleChangeQuantity;
  };

  return { addCartButton, removeFromCartButton, updateCartQuantity };
};
