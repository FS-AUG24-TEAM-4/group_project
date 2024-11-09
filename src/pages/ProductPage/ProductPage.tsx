/* eslint-disable no-console */
import { DeviceCategory } from '@/enums';
import { Device } from '@/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ProductPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const slug = location.pathname.split('/')[2];
  const [product, setProduct] = useState<Device | null>(null);

  useEffect(() => {
    let fileName = '';

    switch (category) {
      case DeviceCategory.PHONES:
        fileName = 'public/api/phones.json';
        break;
      case DeviceCategory.TABLETS:
        fileName = 'public/api/tablets.json';
        break;
      case DeviceCategory.ACCESSORIES:
        fileName = 'public/api/accessories.json';
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
    </div>
  );
};
