import React from 'react';

import { ProductCard } from '../ProductCard/ProductCard';

import styles from './styles.module.scss';
import { Product } from '@/types/Product';
import { DeviceCategory } from '@/enums';

interface Props {
  paginationOfDevice: Product[];
  category: DeviceCategory;
}

export const ProductsList: React.FC<Props> = ({
  paginationOfDevice,
  category,
}) => {
  const getProductPath = (productId: number) => {
    switch (category) {
      case DeviceCategory.PHONES:
        return `/phones/${productId}`;
      case DeviceCategory.TABLETS:
        return `/tablets/${productId}`;
      case DeviceCategory.ACCESSORIES:
        return `/accessories/${productId}`;
      default:
        return '/';
    }
  };

  return (
    <article className={styles.phones_list}>
      {paginationOfDevice.map(phone => (
        <ProductCard
          key={phone.id}
          product={phone}
          productPath={getProductPath(phone.id)}
        />
      ))}
    </article>
  );
};
