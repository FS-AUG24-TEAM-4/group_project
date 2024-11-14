import React from 'react';
import styles from './styles.module.scss';
import { PrimaryButton } from '../PrimaryButton';
import { PrimaryButtons } from '@/enums';
import { useTranslation } from 'react-i18next';

interface LogoutConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const LogoutConfirmationModal: React.FC<
  LogoutConfirmationModalProps
> = ({ isOpen, onConfirm, onCancel }) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{t('areYouSure')}</h2>

        <div className={styles.buttons}>
          <PrimaryButton
            onClick={onConfirm}
            type={PrimaryButtons.CONFIRMCHECKOUT}
          >
            {t('yesLogOut')}
          </PrimaryButton>
          <PrimaryButton
            onClick={onCancel}
            type={PrimaryButtons.CANCELCHECKOUT}
          >
            {t('cancel')}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
