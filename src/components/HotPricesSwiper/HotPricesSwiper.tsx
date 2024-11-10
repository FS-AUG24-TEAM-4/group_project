import { FC } from 'react';
import { Product } from '@/types/Product';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { DeviceCategory } from '@/enums';

interface ProductSliderProps {
  products: Product[];
}

export const HotPricesSwiper: FC<ProductSliderProps> = ({ products }) => {
  function getTopDiscountProductsByCategory(productsArr: Product[]): Product[] {
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

  const BestDiscountProducts = getTopDiscountProductsByCategory(products);

  return <ProductSlider products={BestDiscountProducts} title="Hot Prices" />;
};
