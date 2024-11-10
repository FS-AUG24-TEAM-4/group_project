/* eslint-disable no-console */
import { DeviceCategory } from '@/enums';
import { PathToJSON } from '@/enums/PathToJSON';
import { Device } from '@/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecommendedList } from '@/components/RecommendedList';

export const ProductPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const slug = location.pathname.split('/')[2];
  const [product, setProduct] = useState<Device | null>(null);

  useEffect(() => {
    let fileName = '';

    switch (category) {
      case DeviceCategory.PHONES:
        fileName = PathToJSON.PHONES;
        break;
      case DeviceCategory.TABLETS:
        fileName = PathToJSON.TABLETS;
        break;
      case DeviceCategory.ACCESSORIES:
        fileName = PathToJSON.ACCESSORIES;
        break;
      default:
        return;
    }

    if (fileName) {
      fetch(fileName)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then((data: Device[]) => {
          const foundProduct = data.find(item => item.id === slug);

          setProduct(foundProduct || null);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [category, slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description[0].text.join(' ')}</p>

      <img src={product.images[0]} alt={product.name} />
      <p>
        {product.priceDiscount ? product.priceDiscount : product.priceRegular}
      </p>

      <RecommendedList
        price={product.priceRegular}
        category={product.category}
      />
    </div>
  );
};
