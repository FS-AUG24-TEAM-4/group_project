import { Product } from '@/types';

export const getFavoritesProducts = (favItems: Record<string, Product>) => {
  const favProducts = [];

  for (const nameId in favItems) {
    favProducts.push(favItems[nameId]);
  }

  return favProducts;
};
