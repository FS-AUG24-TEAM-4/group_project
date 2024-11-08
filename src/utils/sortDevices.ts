import { SortType } from '@/enums/SortType';
import { Device } from '@/types/Product';
import { Product } from '@/types/Device';

const getYearOfDevice = (device: Device, products: Product[]) => {
  return products.find(product => product.itemId === device.id)?.year || 0;
};

const getPriceOfDevice = (device: Device, products: Product[]) => {
  return products.find(product => product.itemId === device.id)?.price || 0;
};

export const sortDevices = (
  phonesList: Device[],
  sortType: SortType | string,
  products: Product[],
) => {
  if (sortType) {
    switch (sortType) {
      case SortType.NEWEST:
        return [...phonesList].sort(
          (phone1, phone2) =>
            getYearOfDevice(phone2, products) -
            getYearOfDevice(phone1, products),
        );

      case SortType.OLDEST:
        return [...phonesList].sort(
          (phone1, phone2) =>
            getYearOfDevice(phone1, products) -
            getYearOfDevice(phone2, products),
        );

      case SortType.PRICE_HIGH:
        return [...phonesList].sort(
          (phone1, phone2) =>
            getPriceOfDevice(phone2, products) -
            getPriceOfDevice(phone1, products),
        );

      case SortType.PRICE_LOW:
        return [...phonesList].sort(
          (phone1, phone2) =>
            getPriceOfDevice(phone1, products) -
            getPriceOfDevice(phone2, products),
        );

      default:
        break;
    }
  }

  return phonesList;
};
