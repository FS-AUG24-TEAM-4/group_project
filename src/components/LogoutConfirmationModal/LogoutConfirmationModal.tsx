import React from 'react';
import styles from './styles.module.scss';
import { PrimaryButton } from '../PrimaryButton';
import { PrimaryButtons } from '@/enums';

interface LogoutConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const LogoutConfirmationModal: React.FC<
  LogoutConfirmationModalProps
> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Are you sure you want to log out?</h2>
        <div className={styles.buttons}>
          <PrimaryButton
            onClick={onConfirm}
            type={PrimaryButtons.CONFIRMCHECKOUT}
          >
            Yes, log out
          </PrimaryButton>
          <PrimaryButton
            onClick={onCancel}
            type={PrimaryButtons.CANCELCHECKOUT}
          >
            Cancel
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
