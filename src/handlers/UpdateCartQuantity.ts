import { useDispatch } from 'react-redux';

import { updateQuantity } from '../features/Cart/CartSlice';


export const useUpdateCartQuantity = (itemId: string) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (quantity: number) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  return handleChangeQuantity;
};
