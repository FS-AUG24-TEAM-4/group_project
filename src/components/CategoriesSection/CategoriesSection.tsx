import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { DeviceCategory, Paths } from '@/enums';
import { Product } from '@/types';
import { FC } from 'react';
import { getQuantityByCategory } from '@/utils/getQuantityByCategory';

interface CategoriesSectionProps {
  products: Product[];
}

export const CategoriesSection: FC<CategoriesSectionProps> = ({ products }) => {
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
          <div className={styles.models_quantity}>
            {getQuantityByCategory(products, DeviceCategory.PHONES)} models
          </div>
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
          <div className={styles.models_quantity}>
            {getQuantityByCategory(products, DeviceCategory.TABLETS)} models
          </div>
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
          <div className={styles.models_quantity}>
            {getQuantityByCategory(products, DeviceCategory.ACCESSORIES)} models
          </div>
        </div>
      </section>
    </>
  );
};
