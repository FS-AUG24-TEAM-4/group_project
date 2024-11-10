import React from 'react';

import { ProductCard } from '../ProductCard/ProductCard';

import styles from './styles.module.scss';
import { Product } from '@/types/Product';
import { DeviceCategory } from '@/enums';
import { getProductPath } from '@/utils/getProductPath';

interface Props {
  paginationOfDevice: Product[];
  category: DeviceCategory;
}

export const ProductsList: React.FC<Props> = ({
  paginationOfDevice,
  category,
}) => {
  return (
    <article className={styles.device_list}>
      {paginationOfDevice.map(device => (
        <ProductCard
          discount={true}
          key={device.id}
          product={device}
          productPath={getProductPath(device.itemId, category)}
        />
      ))}
    </article>
  );
};
