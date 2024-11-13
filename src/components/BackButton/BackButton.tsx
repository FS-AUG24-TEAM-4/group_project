import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button className={styles.buttonBack} onClick={() => navigate(-1)}>
      <div className={styles.buttonBackIcon}></div>
      <span className={styles.textButtonBack}>{t('back')}</span>
    </button>
  );
};
