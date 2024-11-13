/* eslint-disable react-hooks/rules-of-hooks */
import { DeviceCategory } from '@/enums';
import { useTranslation } from 'react-i18next';

export const getTitle = (titleCategory: DeviceCategory) => {
  const { t } = useTranslation();

  switch (titleCategory) {
    case DeviceCategory.PHONES:
      return t('phones');
    case DeviceCategory.TABLETS:
      return t('tablets');
    case DeviceCategory.ACCESSORIES:
      return t('accessories');
    case DeviceCategory.SEARCH:
      return t('Search');
  }
};
