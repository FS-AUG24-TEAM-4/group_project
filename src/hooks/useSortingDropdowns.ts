import { SortType } from '@/enums';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Themes } from '@/enums/Themes';
import { useTheme } from './useTheme';

export const useSortingDropdowns = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const { theme } = useTheme();

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

  const optionStyles = (provided: object, state: { isFocused: boolean }) => ({
    ...provided,
    backgroundColor: `${state.isFocused && theme === Themes.DARK ? '#2c2d31' : state.isFocused ? '#f86800' : theme === Themes.DARK ? '#8e969c' : '#fff'}`,
    color: `${state.isFocused && theme === Themes.DARK ? '#cecece' : state.isFocused ? '#fff' : '#0f0f11'}`,
    margin: '0',
    cursor: 'pointer',
    ':active': {
      backgroundColor: theme === Themes.DARK ? '#414345' : '#ff7b00',
      color: theme === Themes.DARK ? '#ececec' : '#fff',
    },
  });

  const menuStyles = (provided: object) => ({
    ...provided,
    borderRadius: '12px',
  });

  const menuListStyles = (provided: object) => ({
    ...provided,
    padding: '0',
    border: `${theme === Themes.DARK ? '1px solid #2c2d31' : '1px solid #B4BDC3'}`,
    borderRadius: '8px',
  });

  const singleValueStyles = (provided: object) => ({
    ...provided,
    color: `${theme === Themes.DARK ? '#cecece' : '#0f0f11'}`,
  });

  const defaultSortStyles = {
    width: '136px',
    height: '40px',
    color: `${theme === Themes.DARK ? '#cecece' : '#0f0f11'}`,
    border: `${theme === Themes.DARK ? '1px solid #2c2d31' : '1px solid #B4BDC3'}`,
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: `${theme === Themes.DARK ? '#17171a' : '#fff'}`,
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
    option: optionStyles,
    menu: menuStyles,
    menuList: menuListStyles,
    singleValue: singleValueStyles,
  };

  const defaultItemDisplayStyles = {
    width: '136px',
    height: '40px',
    color: `${theme === Themes.DARK ? '#cecece' : '#0f0f11'}`,
    border: `${theme === Themes.DARK ? '1px solid #2c2d31' : '1px solid #B4BDC3'}`,
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: `${theme === Themes.DARK ? '#17171a' : '#fff'}`,
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

    option: optionStyles,
    menu: menuStyles,
    menuList: menuListStyles,
    singleValue: singleValueStyles,
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
