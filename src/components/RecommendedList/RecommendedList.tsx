// import { useEffect, useState } from 'react';

// import { Product } from '@/types';
// import { useProducts } from '@/hooks/useProducts';
// import { getRecommendedProducts } from '@/utils';

// import { Slider } from '../Slider';

interface Props {
  price: number;
  category: string;
}

export const RecommendedList: React.FC<Props> = () => {
  // const { products } = useProducts();

  // const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   setRecommendedProducts(getRecommendedProducts(products, price, category));
  // }, [price, category, products]);

  return (
    <section>
      <h4>You may also like</h4>
      {/* <Slider products={recommendedProducts}></Slider> */}
    </section>
  );
};
