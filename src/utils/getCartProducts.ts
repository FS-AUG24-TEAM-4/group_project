import { CartItem } from '@/types/cartItem';

export const getCartProducts = (cartItems: Record<string, CartItem>) => {
  const cartProducts = [];

  for (const nameId in cartItems) {
    cartProducts.push(cartItems[nameId]);
  }

  return cartProducts;
};
