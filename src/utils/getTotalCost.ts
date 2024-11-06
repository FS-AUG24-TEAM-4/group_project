import { CartItem } from '@/features/Cart/CartSlice';

export const getTotalCost = (products: CartItem[]) => {
  return products.reduce(
    (acc, product) =>
      acc + (product.priceDiscount || product.priceRegular) * product.quantity,
    0,
  );
};
