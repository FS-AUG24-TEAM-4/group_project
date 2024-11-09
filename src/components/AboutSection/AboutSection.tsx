import React from 'react';
import styles from './styles.module.scss';

interface Props {
  description: Array<{ title: string; text: string[] }>;
}

export const AboutSection: React.FC<Props> = ({ description }) => {
  const SECTION_ONE = description[0];
  const SECTION_TWO = description[1];
  const SECTION_THREE = description[2];

  const SECTION_TWO_TEXT =
    SECTION_TWO.text.length < 2
      ? SECTION_TWO.text
      : SECTION_TWO.text.reduce((acc, value) => acc + ` ${value}`);

  const SECTION_THREE_TEXT =
    SECTION_TWO.text.length < 2
      ? SECTION_THREE.text
      : SECTION_THREE.text.reduce((acc, value) => acc + ` ${value}`);

  return (
    <div className={styles.about}>
      <h3 className={styles.title}>About</h3>
      <div className={styles.line}></div>
      <section className={styles.sections}>
        <h4 className={styles.section_title}>{SECTION_ONE.title}</h4>
        <p className={styles.section_text}>
          {SECTION_ONE.text[0]}
          <br />
          <br />
          {SECTION_ONE.text[1]}
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
