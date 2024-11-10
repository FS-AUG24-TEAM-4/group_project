import { CategoriesSection } from '@/components/CategoriesSection';
import styles from './styles.module.scss';
import { useProducts } from '@/hooks';
import { NewModelsSwiper } from '@/components/NewModelsSwiper';

export const HomePage = () => {
  const { products } = useProducts();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

      <div className={styles.slider}></div>

      <div className={styles.newModels}>
        <NewModelsSwiper products={products} />
      </div>

      <div className={styles.categories}>
        <CategoriesSection products={products} />
      </div>

      <div className={styles.hotPrices}></div>
    </div>
  );
};
