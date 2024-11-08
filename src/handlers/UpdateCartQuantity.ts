import { updateQuantity } from '@/features/сart/сartSlice';
import { useDispatch } from 'react-redux';

export const useUpdateCartQuantity = (itemId: string) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (quantity: number) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  return handleChangeQuantity;
};
