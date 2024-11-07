import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';

import { PhonesList } from '@/components/PhonesList/PhonesList';
import { useProducts } from '@/hooks/useProducts';
import { usePhones } from '../../hooks/usePhone';
import { sortDevices } from '@/utils/sortDevices';
import { getSearchWith } from '@/utils/getSearchWith';
import { scrollToTop } from '@/utils/scrollToTop';

import bread__img from '../../assets/breadcrumbs-img/Breadcrumbs.png';

import { SortType } from '@/enums/SortType';

import styles from './styles.module.scss';

export const PhonesPage = () => {
  const [searchParams] = useSearchParams();
  const { phones, loading, error } = usePhones();
  const { products } = useProducts();
  const [, setSearchParams] = useSearchParams();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const sortingParams = [
    { value: SortType.NONE, label: 'None' },
    { value: SortType.NEWEST, label: 'Newest' },
    { value: SortType.OLDEST, label: 'Oldest' },
    { value: SortType.PRICE_HIGH, label: 'Price high' },
    { value: SortType.PRICE_LOW, label: 'Price low' },
  ];

  const itemsPerPage = [
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 20, label: '20' },
    { value: 35, label: '35' },
    { value: 50, label: '50' },
  ];

  const sortParams = searchParams.get('sort') || SortType.NONE;
  const currentPage = Number(searchParams.get('page')) || 1;
  const devicesPerPage = searchParams.get('devicesPerPage') || '10';

  const sortedPhones = sortDevices(phones, sortParams, products);

  const lastDeviceIndex = currentPage * +devicesPerPage;
  const firstDeviceIndex = lastDeviceIndex - +devicesPerPage;

  const paginationOfDevice = sortedPhones.slice(
    firstDeviceIndex,
    lastDeviceIndex,
  );

  function handlePageChange(page: number) {
    scrollToTop();

    setTimeout(
      () =>
        setSearchParams(currentParams => {
          const settingPage = page >= 2 ? page.toString() : null;

          return getSearchWith(currentParams, { page: settingPage });
        }),
      800,
    );
  }

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

  const defaultSortStyles = {
    width: '136px',
    height: '40px',
    border: '1px solid #B4BDC3',
    borderRadius: '8px',
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

  const totalPages = Math.ceil(sortedPhones.length / +devicesPerPage);

  return (
    <div className={styles.container}>
      <img
        className={styles.bread__img}
        src={bread__img}
        alt="breadcrumbs-img"
      />

      <h1 className={styles.title}>Mobile phones</h1>

      <p className={styles.counter_text}>{sortedPhones.length} models</p>

      <div className={styles.dropdowns}>
        <div>
          <p className={styles.sort_by_text}>Sort by</p>

          <Select
            styles={customSortingStylesForDropdown}
            options={sortingParams}
            value={showSortingDropdownValue()}
            onChange={value => {
              if (value) {
                setSearchParams(currentParams => {
                  const sortParam =
                    value.value === SortType.NONE ? null : value.value;

                  return getSearchWith(currentParams, { sort: sortParam });
                });
              }
            }}
          />
        </div>

        <div>
          <p className={styles.sort_by_text}>Items on page</p>

          <Select
            styles={customItemDisplayStylesForDropdown}
            options={itemsPerPage}
            value={showItemsPerPageDropdownValue()}
            onChange={value => {
              if (value) {
                setSearchParams(currentParams => {
                  const itemsParams = value.value;

                  return getSearchWith(currentParams, {
                    devicesPerPage: itemsParams.toString(),
                  });
                });
              }
            }}
          />
        </div>
      </div>

      {paginationOfDevice && (
        <PhonesList paginationOfDevice={paginationOfDevice} />
      )}

      <Pagination
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
                border: '1px solid #e2e6e9',
                color: '#0f0f11',
                minHeight: '40px',
                minWidth: '40px',
                borderRadius: '20px',
                '&:hover': {
                  borderColor: '#0f0f11',
                  backgroundColor: '#fff',
                },
                '&:active': {
                  color: '#fff',
                  backgroundColor: '#0f0f11',
                },
                '&.Mui-selected': {
                  color: '#ffffff',
                  backgroundColor: '#0f0f11',
                  '&:hover': {
                    backgroundColor: '#0f0f11',
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
