import { DeviceCategory, Paths } from '@/enums';

export const getProductPath = (itemId: string, category: DeviceCategory) => {
  switch (category) {
    case DeviceCategory.PHONES:
      return `${Paths.PHONES}/${itemId}`;
    case DeviceCategory.TABLETS:
      return `${Paths.TABLETS}/${itemId}`;
    case DeviceCategory.ACCESSORIES:
      return `${Paths.ACCESSORIES}/${itemId}`;
    default:
      return '/';
  }
};
