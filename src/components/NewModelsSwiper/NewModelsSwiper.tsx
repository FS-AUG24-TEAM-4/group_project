import { FC } from 'react';
import { Product } from '@/types/Product';
import { ProductSlider } from '../ProductSlider/ProductSlider';

interface ProductSliderProps {
  products: Product[];
}

export const NewModelsSwiper: FC<ProductSliderProps> = ({ products }) => {
  const latestYear = Math.max(...products.map(product => product.year));
  const latestProducts = products.filter(
    product => product.year === latestYear,
  );

  return <ProductSlider products={latestProducts} title="Brand new models" />;
};
