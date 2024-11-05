import { usePhones } from '../../hooks/usePhone';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './styles.module.scss';
import bread__img from '../../assets/breadcrumbs-img/Breadcrumbs.png';

export const PhonesList = () => {
  const { phones, loading, error } = usePhones();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.bread__img}
        src={bread__img}
        alt="breadcrumbs-img"
      />

      <h1 className={styles.title}>Mobile phones</h1>

      <p className={styles.counter_text}>95 models</p>

      <article className={styles.phones_list}>
        {phones.map(phone => (
          <ProductCard key={phone.id} phone={phone} />
        ))}
      </article>
    </div>
  );
};
