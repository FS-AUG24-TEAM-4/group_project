import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.buttonBack} onClick={() => navigate(-1)}>
      <div className={styles.buttonBackIcon}></div>
      <span className={styles.textButtonBack}>Back</span>
    </button>
  );
};
