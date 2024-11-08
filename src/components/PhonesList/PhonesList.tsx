import React from 'react';

import { ProductCard } from '../ProductCard/ProductCard';

import { Device } from '@/types/Product';

import styles from './styles.module.scss';

interface Props {
  paginationOfDevice: Device[];
}

export const PhonesList: React.FC<Props> = ({ paginationOfDevice }) => {
  return (
    <article className={styles.phones_list}>
      {paginationOfDevice.map(phone => (
        <ProductCard key={phone.id} product={phone} />
      ))}
    </article>
  );
};
