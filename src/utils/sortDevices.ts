import { SortType } from '@/enums/SortType';
import { Device } from '@/types/Device';
import { Product } from '@/types/Product';

const getYearOfDevice = (device: Device, products: Product[]) => {
  return products.find(product => product.itemId === device.id)?.year || 0;
};

const getPriceOfDevice = (device: Device, products: Product[]) => {
  return products.find(product => product.itemId === device.id)?.price || 0;
};

export const sortDevices = (
  deviceList: Device[],
  sortType: SortType | string,
  products: Product[],
) => {
  if (sortType) {
    return [...deviceList].sort((device1: Device, device2: Device) => {
      switch (sortType) {
        case SortType.NEWEST:
          return (
            getYearOfDevice(device2, products) -
            getYearOfDevice(device1, products)
          );
        case SortType.OLDEST:
          return (
            getYearOfDevice(device1, products) -
            getYearOfDevice(device2, products)
          );
        case SortType.PRICE_HIGH:
          return (
            getPriceOfDevice(device2, products) -
            getPriceOfDevice(device1, products)
          );
        case SortType.PRICE_LOW:
          return (
            getPriceOfDevice(device1, products) -
            getPriceOfDevice(device2, products)
          );
        default:
          return 0;
      }
    });
  }

  return deviceList;
};
