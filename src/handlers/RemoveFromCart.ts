import { removeFromCart } from '@/features/сart/сartSlice';
import { useDispatch } from 'react-redux';

export const useRemoveFromCartButton = (itemId: string) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(itemId));
  };

  return handleRemove;
};
