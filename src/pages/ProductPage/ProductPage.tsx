/* eslint-disable no-console */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DeviceCategory } from '@/enums';
import { PathToJSON } from '@/enums/PathToJSON';
import { Device } from '@/types';
import { useProducts } from '@/hooks';

import styles from './style.module.scss';
import {
  BreadCrumbs,
  TechSpecsSection,
  ProductPhotosSlider,
  BackButton,
  ParamsSelection,
  AboutSection,
  RecommendedList,
} from '@/components';

export const ProductPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const slug = location.pathname.split('/')[2];
  const [device, setDevice] = useState<Device | null>(null);
  const { products } = useProducts();

  const selectedProduct = products.find(
    product => product.itemId === device?.id,
  );

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

          setDevice(foundProduct || null);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [category, slug]);

  if (!device) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs productName={device.name} />
      </div>

      <div className={styles.buttonBack}>
        <BackButton />
      </div>

      <h1 className={styles.title}>{device.name}</h1>

      <section className={styles.sliderWrapper}>
        <ProductPhotosSlider photos={device.images} productName={device.name} />
      </section>

      <section className={styles.paramsSelectionWrapper}>
        <ParamsSelection device={device} cartProduct={selectedProduct!} />
      </section>

      <section className={styles.about}>
        <AboutSection description={device.description} />
      </section>

      <section className={styles.techSpecs}>
        <TechSpecsSection product={device} />
      </section>

      <div className={styles.recommended}>
        <RecommendedList
          price={device.priceRegular}
          category={device.category}
        />
      </div>
    </div>
  );
};
