import { SortType } from '@/enums';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useSortingDropdowns = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const sortingParams = [
    { value: SortType.NONE, label: `${t('None')}` },
    { value: SortType.NEWEST, label: `${t('Newest')}` },
    { value: SortType.OLDEST, label: `${t('Oldest')}` },
    { value: SortType.PRICE_HIGH, label: `${t('PriceHigh')}` },
    { value: SortType.PRICE_LOW, label: `${t('PriceLow')}` },
  ];

  const itemsPerPage = [
    { value: 12, label: '12' },
    { value: 24, label: '24' },
    { value: 36, label: '36' },
    { value: 48, label: '48' },
    { value: 60, label: '60' },
  ];

  const sortParams = searchParams.get('sort') || SortType.NONE;
  const currentPage = Number(searchParams.get('page')) || 1;
  const devicesPerPage = searchParams.get('devicesPerPage') || '12';
  const lastDeviceIndex = currentPage * +devicesPerPage;
  const firstDeviceIndex = lastDeviceIndex - +devicesPerPage;

  const isPhone = document.body.clientWidth <= 639;
  const isTablet =
    document.body.clientWidth > 639 && document.body.clientWidth <= 1199;

  const defaultSortStyles = {
    width: '136px',
    height: '40px',
    border: '1px solid #B4BDC3',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const customSortingStylesForDropdown = {
    control: (provided: object) => {
      if (isPhone) {
        return {
          ...provided,
          ...defaultSortStyles,
        };
      }

      if (isTablet) {
        return {
          ...provided,
          ...defaultSortStyles,
          width: '187px',
        };
      }

      return {
        ...provided,
        ...defaultSortStyles,
        width: '176px',
      };
    },
    option: (provided: object) => ({
      ...provided,
    }),
  };

  const defaultItemDisplayStyles = {
    width: '136px',
    height: '40px',
    border: '1px solid #B4BDC3',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const customItemDisplayStylesForDropdown = {
    control: (provided: object) => {
      if (isPhone || isTablet) {
        return {
          ...provided,
          ...defaultItemDisplayStyles,
        };
      }

      return {
        ...provided,
        ...defaultItemDisplayStyles,
        width: '128px',
      };
    },
    option: (provided: object) => ({
      ...provided,
    }),
  };

  const showSortingDropdownValue = () => {
    const currentParams = sortingParams.find(
      param => param.value === sortParams,
    );

    if (currentParams) {
      return currentParams.value === SortType.NONE ? null : currentParams;
    }

    return null;
  };

  const showItemsPerPageDropdownValue = () => {
    const currentParams = itemsPerPage.find(
      param => param.value === +devicesPerPage,
    );

    if (currentParams) {
      return currentParams;
    }

    return null;
  };

  return {
    setSearchParams,
    sortParams,
    firstDeviceIndex,
    lastDeviceIndex,
    devicesPerPage,
    customSortingStylesForDropdown,
    sortingParams,
    showSortingDropdownValue,
    customItemDisplayStylesForDropdown,
    itemsPerPage,
    showItemsPerPageDropdownValue,
    currentPage,
    isPhone,
  };
};
