import { FC, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Device } from '@/types/Device';

interface INCartProductCard {
  product: Device;
}

export const CartProductCard: FC<INCartProductCard> = ({ product }) => {
  const [count, setCount] = useState(1);

  return (
    <article className={styles.card}>
      <div className={styles.containerDeleteImgTitle}>
        <div className={styles.containerCancelImg}>
          <button className={styles.deleteButton}></button>
          <a href="#">
            <img
              src={product.images[0]}
              alt={product.name}
              className={styles.picture}
            />
          </a>
        </div>
        <a href="#">
          <h2 className={styles.title}>{product.name}</h2>
        </a>
      </div>

      <div className={styles.containerButtonsPrice}>
        <div className={styles.buttons}>
          <button
            disabled={count === 1}
            className={classNames(styles.button, styles.decrease, {
              [styles.active]: count === 1,
            })}
            onClick={() => setCount(prev => prev - 1)}
          ></button>
          <span className={styles.quantity}>{count}</span>
          <button
            className={classNames(styles.button, styles.increase)}
            onClick={() => setCount(prev => prev + 1)}
          ></button>
        </div>

        <p className={styles.actual_price}>
          ${product.priceDiscount || product.priceRegular}
        </p>
      </div>
    </article>
  );
};
