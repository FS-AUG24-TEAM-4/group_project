import React from 'react';

import { Product } from '@/types';
import { DeviceCategory } from '@/enums';
import { getProductPath } from '@/utils';

import { ProductCard } from '../ProductCard';
import styles from './styles.module.scss';

interface Props {
  paginationOfDevice: Product[];
  category: DeviceCategory;
}

export const ProductsList: React.FC<Props> = ({
  paginationOfDevice,
  category,
}) => {
  return (
    <>
      {category === DeviceCategory.SEARCH && paginationOfDevice.length === 0 ? (
        <div className={styles.emptySearchContainer}>No devices found</div>
      ) : (
        <article className={styles.device_list}>
          {paginationOfDevice.map(device => (
            <ProductCard
              discount={true}
              key={device.id}
              product={device}
              productPath={getProductPath(
                device.itemId,
                device.category as DeviceCategory,
              )}
            />
          ))}
        </article>
      )}
    </>
  );
};
