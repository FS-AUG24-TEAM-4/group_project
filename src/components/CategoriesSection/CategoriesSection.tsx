import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { DeviceCategory, Paths } from '@/enums';
import { Product } from '@/types';
import { FC } from 'react';
import { getQuantityByCategory } from '@/utils/getQuantityByCategory';
import { PathToSrcImages } from '@/enums/PathToSrcImages';
import { useTranslation } from 'react-i18next';

interface CategoriesSectionProps {
  products: Product[];
}

export const CategoriesSection: FC<CategoriesSectionProps> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className={styles.title}>{t('shopByCategory')}</h2>

      <div className={styles.container}>
        <div className={styles.img_title_quantity_container}>
          <Link to={Paths.PHONES}>
            <img
              src={PathToSrcImages.PHONES}
              alt="Phone image"
              className={styles.image}
            />
          </Link>

          <h3 className={styles.category_title}>{t('phones')}</h3>

          <div className={styles.models_quantity}>
            {getQuantityByCategory(products, DeviceCategory.PHONES)}{' '}
            {t('models')}
          </div>
        </div>

        <div className={styles.img_title_quantity_container}>
          <Link to={Paths.TABLETS}>
            <img
              src={PathToSrcImages.TABLETS}
              alt="Tablet image"
              className={styles.image}
            />
          </Link>

          <h3 className={styles.category_title}>{t('tablets')}</h3>

          <div className={styles.models_quantity}>
            {getQuantityByCategory(products, DeviceCategory.TABLETS)}{' '}
            {t('models')}
          </div>
        </div>

        <div className={styles.img_title_quantity_container}>
          <Link to={Paths.ACCESSORIES}>
            <img
              src={PathToSrcImages.ACCESSORIES}
              alt="Accessories image"
              className={styles.image}
            />
          </Link>

          <h3 className={styles.category_title}>{t('accessories')}</h3>

          <div className={styles.models_quantity}>
            {getQuantityByCategory(products, DeviceCategory.ACCESSORIES)}{' '}
            {t('models')}
          </div>
        </div>
      </div>
    </section>
  );
};
