/* eslint-disable no-console */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DeviceCategory } from '@/enums';
import { PathToJSON } from '@/enums/PathToJSON';
import { Device } from '@/types';

import { BreadCrumbs } from '@/components/BreadCrumbs';
import styles from './style.module.scss';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { TemporaryProductPage } from '@/components/TemporaryProductPage';
import { RecommendedList } from '@/components/RecommendedList';
import { TechSpecsSection } from '@/components/TechSpecsSection';

export const ProductPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const slug = location.pathname.split('/')[2];
  const [product, setProduct] = useState<Device | null>(null);

  useEffect(() => {
    let fileName = '';

    switch (category) {
      case DeviceCategory.PHONES:
        fileName = PathToJSON.PHONES;
        break;
      case DeviceCategory.TABLETS:
        fileName = PathToJSON.TABLETS;
        break;
      case DeviceCategory.ACCESSORIES:
        fileName = PathToJSON.ACCESSORIES;
        break;
      default:
        return;
    }

    if (fileName) {
      fetch(fileName)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then((data: Device[]) => {
          const foundProduct = data.find(item => item.id === slug);

          setProduct(foundProduct || null);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [category, slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs productName={product.name} />
      </div>
      <div className="description">
        <TemporaryProductPage />
      </div>

      <div className={styles.description}>
        <AboutSection description={product.description} />
      </div>
      <div className={styles.techSpecs}>
        <TechSpecsSection product={product} />
      </div>
      <div className={styles.recommended}>
        <RecommendedList
          price={product.priceRegular}
          category={product.category}
        />
      </div>
    </div>
  );
};
