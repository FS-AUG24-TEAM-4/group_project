import { CreatorCard } from '@/components/CreatorsCard/CreatorsCard';
import { useEffect, useState } from 'react';

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
    fetch('public/api/creators.json')
      .then(res => res.json())
      .then(data => setPeople(data));
  }, []);

  return (
    <div>
      {people.map(creator => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </div>
  );
};
