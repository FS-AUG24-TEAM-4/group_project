import { ProductSlider } from '@/components/ProductSlider/ProductSlider';
import styles from './styles.module.scss';
import { useProducts } from '@/hooks';

export const HomePage = () => {
  const { products } = useProducts();
  const newProducts = products.filter(newProduct => newProduct.year >= 2022);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

      <div className={styles.slider}></div>

      <div className={styles.newModels}>
        <ProductSlider title="Brand new models" products={newProducts} />
      </div>

      <div className={styles.categories}></div>

      <div className={styles.hotPrices}></div>
    </div>
  );
};
