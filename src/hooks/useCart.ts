import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/сart/сartSlice';
import { addToCart } from '../features/сart/сartSlice';
import { updateQuantity } from '../features/сart/сartSlice';
import { Device } from '@/types/Device';

export const useAddCartButton = (product: Device) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return handleAddToCart;
};

export const useRemoveFromCartButton = (itemId: string) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(itemId));
  };

  return handleRemove;
};

export const useUpdateCartQuantity = (itemId: string) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (quantity: number) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  return handleChangeQuantity;
};
