import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '@/app/store';
import { getCartProducts, getTotalCost } from '@/utils';
import { PrimaryButtons, Paths } from '@/enums';

import { PrimaryButton } from '../PrimaryButton';
import { ModalWindowSuccess } from '../ModalWindowSuccess/ModalWindowSuccess';
import styles from './styles.module.scss';
import { useCart } from '@/hooks';
import { CartItem } from '@/types';
import { useTranslation } from 'react-i18next';

interface PropsModalWindow {
  isOpen: boolean;
  onClickCancel: () => void;
  onCartEmpty: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalWindowCheckout: FC<PropsModalWindow> = ({
  isOpen,
  onClickCancel,
  setIsModalOpen,
  onCartEmpty,
}) => {
  const cart = useSelector((state: RootState) => state.cart);
  const cartItems: CartItem[] = getCartProducts(cart.items);
  const totalAmount = getTotalCost(cartItems);
  const { removeFromCartButton } = useCart();
  const handleRemove = removeFromCartButton();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleRemoveOnConfirm = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);

    setTimeout(() => {
      navigate(Paths.HOME);
      onCartEmpty();
    }, 2000);

    setTimeout(() => {
      cartItems.forEach(cartItem => {
        handleRemove(cartItem.id);
      });
    }, 2000);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <h2 className={styles.modal__title}>{t('completePurchase')}</h2>

            <div className={styles.modal__tableContainer}>
              <table className={styles.modal__table}>
                <thead>
                  <tr>
                    <th>{t('product')}</th>
                    <th>{t('quantity')}</th>
                    <th>{t('price')}</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map(cartItem => (
                    <tr key={cartItem.id.toString()}>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.quantity}</td>
                      <td>
                        $
                        {cartItem.price
                          ? (cartItem.price * cartItem.quantity).toFixed(2)
                          : 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.modal__total}>
              <span>{t('totalPrice')}:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className={styles.modal__actions}>
              <PrimaryButton
                onClick={handleRemoveOnConfirm}
                type={PrimaryButtons.CONFIRMCHECKOUT}
              >
                {t('confirm')}
              </PrimaryButton>
              <PrimaryButton
                onClick={onClickCancel}
                type={PrimaryButtons.CANCELCHECKOUT}
              >
                {t('cancel')}
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}

      {isSuccessModalOpen && <ModalWindowSuccess />}
    </>
  );
};
