/* eslint-disable react-hooks/rules-of-hooks */
import { Product } from '@/types';
import { useTranslation } from 'react-i18next';

export const getCountOfProductsForCart = (cartProducts: Product[]) => {
  const quantity = cartProducts.length;
  const { t } = useTranslation();

  if (quantity === 1) {
    return `${quantity} ${t('item')}`;
  }

  return `${quantity} ${t('items')}`;
};
