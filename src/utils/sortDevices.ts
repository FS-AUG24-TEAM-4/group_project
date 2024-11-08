import { SortType } from '@/enums/SortType';
import { Product } from '@/types/Product';

export const sortDevices = (
  deviceList: Product[],
  sortType: SortType | string,
) => {
  if (sortType) {
    return [...deviceList].sort((device1: Product, device2: Product) => {
      switch (sortType) {
        case SortType.NEWEST:
          return device2.year - device1.year;
        case SortType.OLDEST:
          return device1.year - device2.year;
        case SortType.PRICE_HIGH:
          return device2.price - device1.price;
        case SortType.PRICE_LOW:
          return device1.price - device2.price;
        default:
          return 0;
      }
    });
  }

  return deviceList;
};
