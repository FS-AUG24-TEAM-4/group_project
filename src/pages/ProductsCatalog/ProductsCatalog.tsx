import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationItem } from '@mui/material';
import Select from 'react-select';
import Pagination from '@mui/material/Pagination';

import { BreadCrumbs, ProductsList, SkeletonGrid } from '@/components';
import { useProducts } from '@/hooks';
import { sortDevices, scrollToTop, getSearchWith, getTitle } from '@/utils';

import { Product } from '@/types';
import { DeviceCategory, SortType } from '@/enums';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/useTheme';
import { Themes } from '@/enums/Themes';
import '../../assets/styles/_variables.scss';

type ProductsCatalogProps = {
  category: DeviceCategory;
};

export const ProductsCatalog: FC<ProductsCatalogProps> = ({ category }) => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const { products, loading } = useProducts();

  const { theme } = useTheme();

  const productsOnPage = products.filter((product: Product) => {
    switch (category) {
      case DeviceCategory.PHONES:
        return product.category === DeviceCategory.PHONES;

      case DeviceCategory.TABLETS:
        return product.category === DeviceCategory.TABLETS;

      default:
        return product.category === DeviceCategory.ACCESSORIES;
    }
  });

  const title = getTitle(category);

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

  const sortedPhones = sortDevices(productsOnPage, sortParams);

  const lastDeviceIndex = currentPage * +devicesPerPage;
  const firstDeviceIndex = lastDeviceIndex - +devicesPerPage;

  const paginationOfDevice = sortedPhones.slice(
    firstDeviceIndex,
    lastDeviceIndex,
  );

  const handlePageChange = (page: number) => {
    scrollToTop();

    setTimeout(
      () =>
        setSearchParams(currentParams => {
          const settingPage = page >= 2 ? page.toString() : null;

          return getSearchWith(currentParams, { page: settingPage });
        }),
      800,
    );
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

  const totalPages = Math.ceil(sortedPhones.length / +devicesPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs />
      </div>

      <h1 className={styles.title}>{title}</h1>

      <p className={styles.counter_text}>
        {' '}
        {sortedPhones.length} {t('models')}
      </p>

      <div className={styles.dropdowns}>
        <div>
          <p className={styles.sort_by_text}>{t('Sortby')}</p>

          <Select
            styles={customSortingStylesForDropdown}
            options={sortingParams}
            isSearchable={false}
            placeholder={t('Select')}
            value={showSortingDropdownValue()}
            onChange={value => {
              if (value) {
                setSearchParams(currentParams => {
                  const sortParam =
                    value.value === SortType.NONE ? null : value.value;

                  return getSearchWith(currentParams, {
                    sort: sortParam,
                    page: '1',
                  });
                });
              }
            }}
          />
        </div>

        <div>
          <p className={styles.sort_by_text}>{t('itemsOnPage')}</p>

          <Select
            styles={customItemDisplayStylesForDropdown}
            options={itemsPerPage}
            isSearchable={false}
            value={showItemsPerPageDropdownValue()}
            onChange={value => {
              if (value) {
                const newCountOfPages = Math.ceil(
                  sortedPhones.length / value.value,
                );
                const itemsParams = value.value;
                const newParams = {
                  devicesPerPage: itemsParams.toString(),
                  page: (newCountOfPages < currentPage
                    ? newCountOfPages
                    : currentPage
                  ).toString(),
                };

                setSearchParams(currentParams => {
                  return getSearchWith(currentParams, newParams);
                });
              }
            }}
          />
        </div>
      </div>

      {loading ? (
        <SkeletonGrid itemsCount={Number(devicesPerPage)} />
      ) : (
        <ProductsList paginationOfDevice={paginationOfDevice} />
      )}

      <Pagination
        page={currentPage}
        count={totalPages}
        onChange={(_event, page: number) => handlePageChange(page)}
        siblingCount={isPhone ? 0 : 1}
        boundaryCount={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '64px',
        }}
        renderItem={item => {
          if (!item.page) {
            return;
          }

          return (
            <PaginationItem
              sx={{
                border: `1px solid ${theme === Themes.DARK ? '#2c2d31' : '#e2e6e9'}`,
                color: `${theme === Themes.DARK ? '#cecece' : '#0f0f11'}`,
                minHeight: '40px',
                minWidth: '40px',
                borderRadius: '20px',
                '&:hover': {
                  borderColor: `${theme === Themes.DARK ? '#8e969c' : '#0f0f11'}`,
                  backgroundColor: `${theme === Themes.LIGHT ? '#fff' : ''}`,
                },
                '&:active': {
                  color: '#fff',
                  backgroundColor: '#0f0f11',
                },
                '&.Mui-selected': {
                  color: '#ffffff',
                  backgroundColor: `${theme === Themes.DARK ? '#2c2d31' : '#0f0f11'}`,
                  borderColor: `${theme === Themes.DARK ? '#2c2d31' : '#0f0f11'}`,
                  '&:hover': {
                    backgroundColor: `${theme === Themes.DARK ? '#2c2d31' : '#0f0f11'}`,
                  },
                },
              }}
              {...item}
            />
          );
        }}
      />
    </div>
  );
};
