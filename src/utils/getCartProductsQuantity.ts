import { CartItem } from '@/types/CartItem';

export const getCartProductsQuantity = (products: CartItem[]) => {
  return products.reduce((acc, product) => acc + product.quantity, 0);
};
