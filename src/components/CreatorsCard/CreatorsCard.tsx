import { FC } from 'react';
import styles from './styles.module.scss';
import { CreatorsType } from '@/pages/CreatorsPage';

interface CreatorCardProps {
  creator: CreatorsType;
}

export const CreatorCard: FC<CreatorCardProps> = ({ creator }) => {
  return (
    <article>
      <h2 className={styles.title}>{creator.name}</h2>

      <div className={styles.price}>
        <p className={styles.actual_price}>{creator.age}</p>
      </div>

      <div className={styles.line}></div>
      <div className={styles.specs}>
        <p className={styles.label}></p>
        <p className={styles.value}>{creator.skills}</p>
      </div>

      <div className={styles.specs}>
        <p className={styles.value}>{creator.skills}</p>
      </div>

      <div className={styles.specs}>
        {/* <p className={styles.label}>{t('ram')}</p>
        <p className={styles.value}>{getSeparetedCapacity(product.ram)}</p> */}
      </div>
    </article>
  );
};
