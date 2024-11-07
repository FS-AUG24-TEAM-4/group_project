import { useDispatch } from 'react-redux';

import { addToCart } from '../features/Cart/CartSlice';
import { Product } from '../types/Product';

export const useAddCartButton = (product: Product) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Use an effect to log the cart whenever it updates
  // useEffect(() => {
  //   console.log('Updated cart:', cart);
  // }, [cart]); // Only run this effect when cart changes

  return handleAddToCart;
};
