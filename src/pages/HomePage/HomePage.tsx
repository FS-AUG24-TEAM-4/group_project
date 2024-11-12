import { useProducts } from '@/hooks';

import styles from './styles.module.scss';
import {
  NewModelsSwiper,
  CategoriesSection,
  HotPricesSwiper,
  PromoSlider,
} from '@/components';

export const HomePage = () => {
  const { products } = useProducts();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

      <div className={styles.slider}>
        <PromoSlider />
      </div>

      <div className={styles.newModels}>
        <NewModelsSwiper products={products} />
      </div>

      <div className={styles.categories}>
        <CategoriesSection products={products} />
      </div>

      <div className={styles.hotPrices}>
        <HotPricesSwiper products={products} />
      </div>
    </div>
  );
};
