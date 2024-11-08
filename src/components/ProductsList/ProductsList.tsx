import React from 'react';

import { ProductCard } from '../ProductCard/ProductCard';

import styles from './styles.module.scss';
import { Product } from '@/types/Product';

interface Props {
  paginationOfDevice: Product[];
}

export const ProductsList: React.FC<Props> = ({ paginationOfDevice }) => {
  return (
    <article className={styles.phones_list}>
      {paginationOfDevice.map(phone => (
        <ProductCard key={phone.id} product={phone} />
      ))}
    </article>
  );
};
