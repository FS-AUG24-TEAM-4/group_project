import { DeviceCategory } from '@/enums';
import { Product } from '@/types';

export const getQuantityByCategory = (
  products: Product[],
  category: DeviceCategory,
) => {
  return products.filter(product => product.category === category).length;
};
