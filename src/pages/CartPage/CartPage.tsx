import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { PrimaryButton } from '@/components';
import { PrimaryButtons } from '@/enums';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import {
  getTotalCost,
  getCartProducts,
  getCartProductsQuantity,
} from '@/utils';
import { CartProductCard } from '@/components/CartProductCard/CartProductCard';

export const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const cartProducts = getCartProducts(cart.items);
  const totalCost = getTotalCost(cartProducts);
  const quantity = getCartProductsQuantity(cartProducts);

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonBack} onClick={() => navigate(-1)}>
        <div className={styles.buttonBackIcon}></div>
        Back
      </button>

      <h1 className={styles.title}>Cart</h1>

      <div className={styles.cardList}>
        {cartProducts.map(product => (
          <CartProductCard product={product} key={product.id} />
        ))}
      </div>

      <div className={styles.checkout}>
        <div className={styles.checkoutTop}>
          <p className={styles.totalCost}>${totalCost}</p>
          <p className={styles.itemsCount}>{`Total for ${quantity} items`}</p>
        </div>

        <div className={styles.buttonCheckout}>
          <PrimaryButton type={PrimaryButtons.CHECKOUT}>Checkout</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
