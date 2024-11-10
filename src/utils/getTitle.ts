import { DeviceCategory } from '@/enums';

export const getTitle = (titleCategory: DeviceCategory) => {
  switch (titleCategory) {
    case DeviceCategory.PHONES:
      return 'Mobile phones';
    case DeviceCategory.TABLETS:
      return 'Tablets';
    case DeviceCategory.ACCESSORIES:
      return 'Accessories';
    default:
      return 'Products';
  }
};
