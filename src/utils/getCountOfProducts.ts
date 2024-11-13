import { Product } from '@/types';

export const getCountOfProducts = (
  favProducts: Product[],
  t: (key: string) => string,
) => {
  const quantity = favProducts.length;

  if (quantity === 1) {
    return `${quantity} ${t('model')}`;
  }

  return `${quantity} ${t('models')}`;
};
