import React from 'react';
import styles from './styles.module.scss';
import { concatTextInSections } from '@/utils/concatTextInSections';
import { useTranslation } from 'react-i18next';

interface Props {
  description: Array<{ title: string; text: string[] }>;
}

export const AboutSection: React.FC<Props> = ({ description }) => {
  const { t } = useTranslation();

  const SECTION_ONE = description[0];
  const SECTION_TWO = description[1];
  const SECTION_THREE = description[2];

  const SECTION_TWO_TEXT = concatTextInSections(SECTION_TWO.text);

  const SECTION_THREE_TEXT = concatTextInSections(SECTION_THREE.text);

  return (
    <div className={styles.about}>
      <h3 className={styles.title}>{t('about')}</h3>

      <div className={styles.line}></div>

      <section className={styles.sections}>
        <h4 className={styles.section_title}>{SECTION_ONE.title}</h4>
        <p className={styles.section_text}>
          {SECTION_ONE.text[0]}
          {SECTION_ONE.text[1] && (
            <>
              <br />
              <br />
              {SECTION_ONE.text[1]}
            </>
          )}
        </p>
      </section>

      <section className={styles.sections}>
        <h4 className={styles.section_title}>{SECTION_TWO.title}</h4>
        <p className={styles.section_text}>{SECTION_TWO_TEXT}</p>
      </section>

      <section className={styles.sections}>
        <h4 className={styles.section_title}>{SECTION_THREE.title}</h4>
        <p className={styles.section_text}>{SECTION_THREE_TEXT}</p>
      </section>
    </div>
  );
};
