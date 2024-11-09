import { CartItem } from '@/types/CartItem';

export const getTotalCost = (products: CartItem[]) => {
  return products.reduce(
    (acc, product) =>
      acc + (product.price || product.fullPrice) * product.quantity,
    0,
  );
};
