import { Product } from '@/types';

export const getRecommendedProducts = (
  products: Product[],
  price: number,
  category: string,
) => {
  return products.filter(
    product =>
      product.category === category &&
      product.fullPrice <= price + 150 &&
      product.fullPrice >= price - 150,
  );
};
