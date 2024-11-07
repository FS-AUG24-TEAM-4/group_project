import { CartItem } from '@/features/Cart/CartSlice';

export const getCartProductsQuantity = (products: CartItem[]) => {
  return products.reduce((acc, product) => acc + product.quantity, 0);
};
