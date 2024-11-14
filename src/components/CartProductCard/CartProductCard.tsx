import { FC } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { CartItem } from '@/types';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../features/сart/сartSlice';
import { Link } from 'react-router-dom';

interface INCartProductCard {
  product: CartItem;
}

export const CartProductCard: FC<INCartProductCard> = ({ product }) => {
  const dispatch = useDispatch();
  const finalPrice = product.price || product.fullPrice;

  return (
    <article className={styles.card}>
      <div className={styles.containerDeleteImgTitle}>
        <div className={styles.containerCancelImg}>
          <button
            className={styles.deleteButton}
            onClick={() => dispatch(removeFromCart(product.id))}
          ></button>
          <Link
            to={`/${product.category}/${product.itemId}`}
            className={styles.productLink}
          >
            <img
              src={product.image}
              alt={product.name}
              className={styles.picture}
            />
          </Link>
        </div>
        <Link
          to={`/${product.category}/${product.itemId}`}
          className={styles.productLink}
        >
          <h2 className={styles.title}>{product.name}</h2>
        </Link>
      </div>

      <div className={styles.containerButtonsPrice}>
        <div className={styles.buttons}>
          <button
            disabled={product.quantity === 1}
            className={classNames(styles.button, styles.decrease, {
              [styles.active]: product.quantity === 1,
            })}
            onClick={() => dispatch(decreaseQuantity(product.id))}
          ></button>

          <span className={styles.quantity}>{product.quantity}</span>

          <button
            className={classNames(styles.button, styles.increase)}
            onClick={() => dispatch(increaseQuantity(product.id))}
          ></button>
        </div>

        <p className={styles.actual_price}>${finalPrice * product.quantity}</p>
      </div>
    </article>
  );
};
