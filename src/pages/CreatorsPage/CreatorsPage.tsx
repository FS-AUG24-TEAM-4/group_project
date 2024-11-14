import { CreatorCard } from '@/components/CreatorsCard/CreatorsCard';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { PathToJSON } from '@/enums';

export interface CreatorsType {
  id: string;
  name: string;
  age: number;
  skills: string;
  Linkedin: string;
  photo: string;
}

export const CreatorsPage = () => {
  const [people, setPeople] = useState<CreatorsType[]>([]);

  useEffect(() => {
    fetch(PathToJSON.CREATORS)
      .then(res => res.json())
      .then(data => setPeople(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Creators</div>
      <div className={styles.device_list}>
        {people.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
};
