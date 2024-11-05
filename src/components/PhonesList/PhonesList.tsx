import { usePhones } from '../../hooks/usePhone';
import { ProductCard } from '../ProductCard/ProductCard';

export const PhonesList = () => {
  const { phones, loading, error } = usePhones();

  if (loading) {
    return <p>Loading...</p>
  };
  if (error) {
    return <p>{error}</p>
  };

  return (
    <div>
      {phones.map(phone => (
        <ProductCard key={phone.id} product={phone} />
      ))}
    </div>
  );
};
