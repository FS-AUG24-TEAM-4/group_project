import { useDispatch } from 'react-redux';

import { removeFromCart } from '../features/Cart/CartSlice';

export const useRemoveFromCartButton = () => {
  const dispatch = useDispatch();

  const handleRemove = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  return handleRemove;
};
