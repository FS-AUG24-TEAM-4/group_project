/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { RootState } from '@/app/store';
import {
  getTotalCost,
  getCartProducts,
  getCartProductsQuantity,
} from '@/utils';
import { PrimaryButtons } from '@/enums';
import {
  ModalWindowCheckout,
  BackButton,
  CartProductCard,
  PrimaryButton,
  EmptyPage,
} from '@/components';

import styles from './styles.module.scss';

export const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const cartProducts = getCartProducts(cart.items);
  const totalCost = getTotalCost(cartProducts);
  const quantity = getCartProductsQuantity(cartProducts);

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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div
      className={cn(styles.wrapper, { [styles.wrapperWithModal]: isModalOpen })}
    >
      <div className={styles.backButton}>
        <BackButton />
      </div>

      <h1 className={styles.title}>Cart</h1>

      {isCartEmpty ? (
        <EmptyPage title="Your cart is empty." background="cart" />
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
