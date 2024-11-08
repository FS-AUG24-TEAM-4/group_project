import styles from './styles.module.scss';

export const ModalWindowSuccess = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>Thank you for purchase!</h2>
      </div>
    </div>
  );
};
