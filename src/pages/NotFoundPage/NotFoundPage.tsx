import { PrimaryButton } from '@/components';
import { Paths } from '@/enums';

import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('notFound')}</h1>

      <p className={styles.description}>{t('description')}</p>

      <PrimaryButton to={Paths.HOME}>{t('goBackHome')}</PrimaryButton>
    </div>
  );
};
