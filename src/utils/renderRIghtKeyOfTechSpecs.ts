import { Device } from '@/types';

export const renderRightKeyOfTechSpecs = (product: Device, key: string) => {
  if (key === 'Built in memory' && product.category === 'accessories') {
    return 'Size';
  }

  if (key === `Вбудована пам'ять` && product.category === 'accessories') {
    return 'Розмір';
  }

  if (key === 'memory') {
    return 'Built in memory';
  }

  return key;
};
