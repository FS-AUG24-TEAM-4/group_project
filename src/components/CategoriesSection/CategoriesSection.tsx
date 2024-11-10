import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Paths } from '@/enums';

export const CategoriesSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Shop by category</h2>;
      <Link to={Paths.PHONES}>
        <img
          src="src/assets/images/icons/phones.png"
          alt="Phone image"
          className={styles.image}
        />
      </Link>
      <h3 className={styles.category_title}>Mobile phones</h3>
      <div className={styles.models_quantity}>95 models</div>
      <Link to={Paths.TABLETS}>
        <img
          src="src/assets/images/icons/tablets.png"
          alt="Tablet image"
          className={styles.image}
        />
      </Link>
      <h3 className={styles.category_title}>Tablets</h3>
      <div className={styles.models_quantity}>34 models</div>
      <Link to={Paths.ACCESSORIES}>
        <img
          src="src/assets/images/icons/accessories.png"
          alt="Accessories image"
          className={styles.image}
        />
      </Link>
      <h3 className={styles.category_title}>Accessories</h3>
      <div className={styles.models_quantity}>22 models</div>
    </section>
  );
};
