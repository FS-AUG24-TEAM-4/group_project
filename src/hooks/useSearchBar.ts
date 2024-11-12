import { Paths } from '@/enums';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery('');

    return navigate(`${Paths.SEARCH}?searchQuery=${query}`);
  };

  return { query, setQuery, handleSubmit };
};
