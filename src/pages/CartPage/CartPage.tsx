/* eslint-disable max-len */
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { PrimaryButton } from '@/components';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import {
  getTotalCost,
  getCartProducts,
  getCartProductsQuantity,
} from '@/utils';
import { CartProductCard } from '@/components/CartProductCard/CartProductCard';
import { PrimaryButtons } from '@/enums/PrimaryButtons';
import { useState } from 'react';
import { ModalWindowCheckout } from '@/components/ModalWindowCheckout/ModalWindowCheckout';

export const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const cartProducts = getCartProducts(cart.items);
  const totalCost = getTotalCost(cartProducts);
  const quantity = getCartProductsQuantity(cartProducts);

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(!cartProducts.length);

  const handleClickCheckout = () => {
    setIsModalOpen(true);
  };

  const handleClickCancel = () => {
    setIsModalOpen(false);
  };

  const handleCartEmpty = () => {
    setIsCartEmpty(true);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonBack} onClick={() => navigate(-1)}>
        <div className={styles.buttonBackIcon}></div>
        <span className={styles.textButtonBack}>Back</span>
      </button>

      <h1 className={styles.title}>Cart</h1>

      {isCartEmpty ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cardList}>
            {cartProducts.map(product => (
              <CartProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className={styles.checkout}>
            <div className={styles.checkoutTop}>
              <p className={styles.totalCost}>${totalCost}</p>
              <p
                className={styles.itemsCount}
              >{`Total for ${quantity} items`}</p>
            </div>

            <div className={styles.buttonCheckout}>
              <PrimaryButton
                type={PrimaryButtons.CHECKOUT}
                onClick={handleClickCheckout}
              >
                Checkout
              </PrimaryButton>

              <ModalWindowCheckout
                isOpen={isModalOpen}
                onClickCancel={handleClickCancel}
                setIsModalOpen={setIsModalOpen}
                onCartEmpty={handleCartEmpty}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
