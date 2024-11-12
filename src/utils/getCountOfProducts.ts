import { Product } from '@/types';

export const getCountOfProducts = (favProducts: Product[]) => {
  const quantity = favProducts.length;

  if (quantity === 1) {
    return `${quantity} model`;
  }

  return `${quantity} models`;
};
