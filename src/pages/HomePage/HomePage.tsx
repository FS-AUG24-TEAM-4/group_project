import { useProducts } from '@/hooks';

import styles from './styles.module.scss';
import {
  NewModelsSwiper,
  CategoriesSection,
  HotPricesSwiper,
  PromoSlider,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const HomePage = () => {
  const { products, fetchProducts } = useProducts();
  const { t } = useTranslation();

  useEffect(() => {
    if (!products.length) {
      fetchProducts();
    }
  }, [products.length]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('welcome')}</h1>

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
