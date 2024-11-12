import { FC } from 'react';
import { Product } from '@/types/Product';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { getTopDiscountProducts } from '@/utils';
import { useTranslation } from 'react-i18next';

interface ProductSliderProps {
  products: Product[];
}

export const HotPricesSwiper: FC<ProductSliderProps> = ({ products }) => {
  const BestDiscountProducts = getTopDiscountProducts(products);
  const { t } = useTranslation();

  return (
    <ProductSlider products={BestDiscountProducts} title={t('hotPrices')} />
  );
};
