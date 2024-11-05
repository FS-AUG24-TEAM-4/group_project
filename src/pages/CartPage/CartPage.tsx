import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { PrimaryButton } from '@/components';
import { PrimaryButtons } from '@/enums';

export const CartPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonBack} onClick={() => navigate(-1)}>
        Back
      </button>

      <h1 className={styles.title}>Cart</h1>

      <div className={styles.cardList}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>

      <div className={styles.checkout}>
        <div className={styles.checkoutTop}>
          <p className={styles.totalCost}>$2657</p>
          <p className={styles.itemsCount}>Total for 3 items</p>
        </div>

        <div className={styles.buttonCheckout}>
          <PrimaryButton type={PrimaryButtons.CHECKOUT}>Checkout</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
