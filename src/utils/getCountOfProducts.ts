/* eslint-disable react-hooks/rules-of-hooks */
import { Product } from '@/types';
import { useTranslation } from 'react-i18next';

export const getCountOfProducts = (favProducts: Product[]) => {
  const quantity = favProducts.length;
  const { t } = useTranslation();

  if (quantity === 1) {
    return `${quantity} ${t('model')}`;
  }

  return `${quantity} ${t('models')}`;
};
