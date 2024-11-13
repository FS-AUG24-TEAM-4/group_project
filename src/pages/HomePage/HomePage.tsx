import { useProducts } from '@/hooks';

import styles from './styles.module.scss';
import {
  NewModelsSwiper,
  CategoriesSection,
  HotPricesSwiper,
  PromoSlider,
} from '@/components';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { products } = useProducts();
  const { t } = useTranslation();

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
