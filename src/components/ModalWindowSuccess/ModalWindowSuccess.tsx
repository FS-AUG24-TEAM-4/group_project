import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const ModalWindowSuccess = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>{t('thankYouForPurchase')}</h2>
      </div>
    </div>
  );
};
