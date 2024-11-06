import { Phone } from '@/types/Phone';
import { FC, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
interface INCartProductCard {
  phone: Phone;
}

export const CartProductCard: FC<INCartProductCard> = ({ phone }) => {
  const [count, setCount] = useState(1);

  return (
    <article className={styles.card}>
      <div className={styles.containerDeleteImgTitle}>
        <div className={styles.containerCancelImg}>
          <button className={styles.deleteButton}></button>
          <a href="#">
            <img
              src={phone.images[0]}
              alt={phone.name}
              className={styles.picture}
            />
          </a>
        </div>
        <a href="#">
          <h2 className={styles.title}>{phone.name}</h2>
        </a>
      </div>

      <div className={styles.containerButtonsPrice}>
        <div className={styles.buttons}>
          <button
            disabled={count === 1 ? true : false}
            className={classNames(styles.decrease, {
              [styles.active]: count === 1,
            })}
            onClick={() => setCount(prev => prev - 1)}
          ></button>
          <span className={styles.quantity}>{count}</span>
          <button
            className={styles.increase}
            onClick={() => setCount(prev => prev + 1)}
          ></button>
        </div>

        <p className={styles.actual_price}>
          ${phone.priceDiscount || phone.priceRegular}
        </p>
      </div>
    </article>
  );
};
