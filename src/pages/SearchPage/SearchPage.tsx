import { useSearchParams } from 'react-router-dom';
import { ProductsCatalog } from '../ProductsCatalog';
import { DeviceCategory } from '@/enums';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('searchQuery') || '';

  return (
    <ProductsCatalog category={DeviceCategory.SEARCH} searchQuery={query} />
  );
};
