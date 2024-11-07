import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { PrimaryButton } from '../PrimaryButton';
import { PrimaryButtons } from '@/enums/PrimaryButtons';
import { useRemoveFromCartButton } from '@/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { getCartProducts, getTotalCost } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@/enums';
import { ModalWindowSuccess } from '../ModalWindowSuccess/ModalWindowSuccess';

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
  const cartItems = getCartProducts(cart.items);
  const totalAmount = getTotalCost(cartItems);

  const handleRemove = useRemoveFromCartButton();
  const navigate = useNavigate();

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleRemoveOnConfirm = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);

    setTimeout(() => {
      navigate(Paths.HOME);
      onCartEmpty();
    }, 3000);

    cartItems.forEach(cartItem => {
      handleRemove(cartItem.id);
    });
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <h2 className={styles.modal__title}>Complete your purchase</h2>

            <div className={styles.modal__tableContainer}>
              <table className={styles.modal__table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map(cartItem => (
                    <tr key={cartItem.id.toString()}>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.quantity}</td>
                      <td>
                        $
                        {cartItem.priceDiscount
                          ? (
                              cartItem.priceDiscount * cartItem.quantity
                            ).toFixed(2)
                          : 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.modal__total}>
              <span>TotalPrice:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className={styles.modal__actions}>
              <PrimaryButton
                onClick={handleRemoveOnConfirm}
                type={PrimaryButtons.CART}
              >
                Confirm
              </PrimaryButton>
              <PrimaryButton
                onClick={onClickCancel}
                type={PrimaryButtons.CANCELCHECKOUT}
              >
                Cancel
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}

      {isSuccessModalOpen && <ModalWindowSuccess />}
    </>
  );
};
