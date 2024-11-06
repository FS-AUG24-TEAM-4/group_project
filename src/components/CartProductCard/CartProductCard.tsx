import { Phone } from '@/types/Phone';
import { FC, useState } from 'react';
import styles from './styles.module.scss';

interface INCartProductCard {
  phone: Phone;
}

export const CartProductCard: FC<INCartProductCard> = ({ phone }) => {
  const [count, setCount] = useState(1);

  return (
    <article className={styles.card}>
      <button className={styles.deleteButton}></button>
      <a href="#">
        <img
          src={phone.images[0]}
          alt={phone.name}
          className={styles.picture}
        />
      </a>
      <a href="#">
        <h2 className={styles.title}>{phone.name}</h2>
      </a>

      <div className={styles.buttons}>
        <button
          className={styles.decrease}
          onClick={() => setCount(prev => prev - 1)}
        ></button>
        <span>{count}</span>
        <button
          className={styles.increase}
          onClick={() => setCount(prev => prev + 1)}
        ></button>
      </div>

      <p className={styles.actual_price}>
        ${phone.priceDiscount || phone.priceRegular}
      </p>
    </article>
  );
};
