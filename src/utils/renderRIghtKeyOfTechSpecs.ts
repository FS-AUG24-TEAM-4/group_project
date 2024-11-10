import { Device } from '@/types';

export const renderRightKeyOfTechSpecs = (product: Device, key: string) => {
  if (key === 'Memory' && product.category === 'accessories') {
    return 'Size';
  }

  if (key === 'Memory') {
    return 'Built in memory';
  }

  return key;
};
