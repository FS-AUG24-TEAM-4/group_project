import { DeviceCategory } from '@/enums';
import { Product } from '@/types';

export function getTopDiscountProducts(productsArr: Product[]): Product[] {
  const getDiscount = (product: Product) => product.fullPrice - product.price;

  const topProducts: Product[] = [];

  Object.values(DeviceCategory).forEach(category => {
    const topInCategory = [...productsArr]
      .filter(product => product.category === category)
      .sort((a, b) => getDiscount(b) - getDiscount(a))
      .slice(0, 5);

    topProducts.push(...topInCategory);
  });

  return topProducts.sort(() => Math.random() - 0.5);
}
