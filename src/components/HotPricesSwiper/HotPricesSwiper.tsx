import { FC } from 'react';
import { Product } from '@/types/Product';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { getTopDiscountProducts } from '@/utils/getTopDiscountProduct';

interface ProductSliderProps {
  products: Product[];
}

export const HotPricesSwiper: FC<ProductSliderProps> = ({ products }) => {
  const BestDiscountProducts = getTopDiscountProducts(products);

  return <ProductSlider products={BestDiscountProducts} title="Hot Prices" />;
};
