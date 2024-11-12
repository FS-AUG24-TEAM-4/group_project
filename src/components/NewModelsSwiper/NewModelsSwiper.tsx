import { FC } from 'react';
import { Product } from '@/types';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { useTranslation } from 'react-i18next';

interface ProductSliderProps {
  products: Product[];
}

export const NewModelsSwiper: FC<ProductSliderProps> = ({ products }) => {
  const latestYear = Math.max(...products.map(product => product.year));
  const { t } = useTranslation();
  const latestProducts = products.filter(
    product => product.year === latestYear,
  );

  return (
    <ProductSlider
      products={latestProducts}
      title={t('newModels')}
      discount={false}
    />
  );
};
