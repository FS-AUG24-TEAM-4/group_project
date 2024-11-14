import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export interface CreatorsType {
  id: string;
  name: string;
  age: number;
  skills: string;
  Linkedin: string;
  photo: string;
}

export const RightsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.rights}>
        <div className={styles.rights__container}>
          <h1 className={styles.rights__title}>{t('rightsAndConditions')}</h1>

          <section className={styles.rights__section}>
            <h2>{t('termsOfUse')}</h2>
            <p>{t('first')}</p>
          </section>

          <section className={styles.rights__section}>
            <h2>{t('privacy')}</h2>
            <p>{t('second')}</p>
          </section>

          <section className={styles.rights__section}>
            <h2>{t('copyright')}</h2>
            <p>{t('third')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
