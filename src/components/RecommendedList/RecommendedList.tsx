import { useEffect, useState } from 'react';

import { Product } from '@/types';
import { useProducts } from '@/hooks/useProducts';
import { getRecommendedProducts } from '@/utils';

import { ProductSlider } from '../ProductSlider';
import { useTranslation } from 'react-i18next';

interface Props {
  price: number;
  category: string;
}

export const RecommendedList: React.FC<Props> = ({ price, category }) => {
  const { t } = useTranslation();

  const { products } = useProducts();

  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setRecommendedProducts(getRecommendedProducts(products, price, category));
  }, [price, category, products]);

  return (
    <ProductSlider
      title={t('recommended')}
      products={recommendedProducts}
    ></ProductSlider>
  );
};
