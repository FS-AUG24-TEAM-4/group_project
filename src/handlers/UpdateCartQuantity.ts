import { updateQuantity } from '@/features/сart/сartSlice';
import { useDispatch } from 'react-redux';

export const useUpdateCartQuantity = (itemId: number) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (quantity: number) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  return handleChangeQuantity;
};
