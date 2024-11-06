import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/сart/сartSlice';
import { addToCart, toggleClickedBuy } from '../features/сart/сartSlice';
import { Product } from '../types/Product';
import { updateQuantity } from '../features/сart/сartSlice';
export const useAddCartButton = (product: Product) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(toggleClickedBuy(product.id));
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
