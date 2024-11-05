import { SortType } from '@/enums/SortType';
import { Device } from '@/types/Device';
import { Product } from '@/types/Product';

const getYearOfDevice = (device: Device, products: Product[]) => {

  return products.find(product => product.itemId === device.id)?.year || 0;
};

export const sortDevices = (phonesList: Device[], sortType: SortType, products: Product[]) => {
    let phonesListCopy = [...phonesList];

    switch (sortType) {
      case SortType.NEWEST:
        phonesListCopy = phonesListCopy.sort(
          (phone1, phone2) => getYearOfDevice(phone2, products) - getYearOfDevice(phone1, products),
        );
        break;

      default:
        break;
    }

    return phonesListCopy;
};
