import { useDispatch } from 'react-redux';

import { removeFromCart } from '../features/Cart/CartSlice';

export const useRemoveFromCartButton = (itemId: string) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(itemId));
  };

  return handleRemove;
};
