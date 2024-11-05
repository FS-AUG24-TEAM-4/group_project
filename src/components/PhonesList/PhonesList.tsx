import { usePhones } from '../../hooks/usePhone';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './styles.module.scss';
import bread__img from '../../assets/breadcrumbs-img/Breadcrumbs.png';
import { sortDevices } from '@/utils/sortDevices';
import { useState } from 'react';
import { SortType } from '@/enums/SortType';
import { useProducts } from '@/hooks/useProducts';

export const PhonesList = () => {
  const { phones, loading, error } = usePhones();
  const { products } = useProducts();
  const [sort, setSort] = useState<SortType>(SortType.NONE);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const sortedPhones = sortDevices(phones, sort, products);

  return (
    <div className={styles.container}>
      <img
        className={styles.bread__img}
        src={bread__img}
        alt="breadcrumbs-img"
      />

      <h1 className={styles.title}>Mobile phones</h1>

      <p className={styles.counter_text}>95 models</p>

      <div className={styles.dropdowns}>
        <button onClick={() => setSort(SortType.NEWEST)}>sort by year</button>
      </div>

      {sortedPhones && (
        <article className={styles.phones_list}>
          {sortedPhones.map(phone => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </article>
      )}
    </div>
  );
};
