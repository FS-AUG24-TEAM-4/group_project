import { useEffect, useState } from 'react';

import { Product } from '@/types';
import { useProducts } from '@/hooks/useProducts';
import { getRecommendedProducts } from '@/utils';

import { ProductSlider } from '../ProductSlider';

interface Props {
  price: number;
  category: string;
}

export const RecommendedList: React.FC<Props> = ({ price, category }) => {
  const { products } = useProducts();

  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setRecommendedProducts(getRecommendedProducts(products, price, category));
  }, [price, category, products]);

  return (
    <ProductSlider
      title="You may also like"
      products={recommendedProducts}
    ></ProductSlider>
  );
};
