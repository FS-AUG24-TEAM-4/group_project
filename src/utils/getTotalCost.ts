import { CartItem } from '@/features/сart/CartSlice';

export const getTotalCost = (cartItems: Record<string, CartItem>) => {
  let total = 0;

  for (const nameId in cartItems) {
    const cartItem = cartItems[nameId];

    total += Number(cartItem.priceDiscount) * cartItem.quantity;
  }

  return total;
};
