import { FC } from 'react';
import styles from './styles.module.scss';
import { CreatorsType } from '@/pages/CreatorsPage';
import linkedin from '@/assets/images/icons/link.svg';

interface CreatorCardProps {
  creator: CreatorsType;
}

export const CreatorCard: FC<CreatorCardProps> = ({ creator }) => {
  return (
    <article className={styles.card}>
      <img src={creator.photo} alt={creator.name} className={styles.picture} />
      <h2 className={styles.title}>{creator.name}</h2>

      <div className={styles.line}></div>
      <div className={styles.specs}>
        <p className={styles.label}>Age</p>
        <p className={styles.value}>{creator.age}</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.label}>Skills</p>
        <p className={styles.value}>{creator.skills}</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.label}>Linkedin</p>
        <p className={styles.value}>
          <a
            href={creator.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            <img src={linkedin} alt="link to Linkedin" />
          </a>
        </p>
      </div>
    </article>
  );
};
