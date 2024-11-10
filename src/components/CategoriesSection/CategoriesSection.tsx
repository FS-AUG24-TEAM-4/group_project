import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Paths } from '@/enums';

export const CategoriesSection = () => {
  return (
    <>
      <h2 className={styles.title}>Shop by category</h2>

      <section className={styles.container}>
        <div className="img_title_quantity_container">
          <Link to={Paths.PHONES}>
            <img
              src="src/assets/images/phones.svg"
              alt="Phone image"
              className={styles.image}
            />
          </Link>
          <h3 className={styles.category_title}>Mobile phones</h3>
          <div className={styles.models_quantity}>95 models</div>
        </div>

        <div className="img_title_quantity_container">
          <Link to={Paths.TABLETS}>
            <img
              src="src/assets/images/tablets.svg"
              alt="Tablet image"
              className={styles.image}
            />
          </Link>
          <h3 className={styles.category_title}>Tablets</h3>
          <div className={styles.models_quantity}>34 models</div>
        </div>

        <div className="img_title_quantity_container">
          <Link to={Paths.ACCESSORIES}>
            <img
              src="src/assets/images/accessories.svg"
              alt="Accessories image"
              className={styles.image}
            />
          </Link>
          <h3 className={styles.category_title}>Accessories</h3>
          <div className={styles.models_quantity}>22 models</div>
        </div>
      </section>
    </>
  );
};
