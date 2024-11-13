import { FC } from 'react';
import { InputBase, PaginationItem } from '@mui/material';
import Select from 'react-select';
import Pagination from '@mui/material/Pagination';

import { BreadCrumbs, ProductsList, SkeletonGrid } from '@/components';
import { useProducts } from '@/hooks';
import { sortDevices, scrollToTop, getSearchWith, getTitle } from '@/utils';

import { Product } from '@/types';
import { DeviceCategory, SortType } from '@/enums';
import styles from './styles.module.scss';
import { useSearchBar } from '@/hooks/useSearchBar';
import { useSortingDropdowns } from '@/hooks/useSortingDropdowns';

type ProductsCatalogProps = {
  category: DeviceCategory;
  searchQuery?: string;
};

export const ProductsCatalog: FC<ProductsCatalogProps> = ({
  category,
  searchQuery = '',
}) => {
  const { products, loading } = useProducts();
  const { query, setQuery, handleSubmit } = useSearchBar();
  const {
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
  } = useSortingDropdowns();

  const productsOnPage = products.filter((product: Product) => {
    switch (category) {
      case DeviceCategory.PHONES:
        return product.category === DeviceCategory.PHONES;

      case DeviceCategory.TABLETS:
        return product.category === DeviceCategory.TABLETS;

      case DeviceCategory.SEARCH:
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());

      default:
        return product.category === DeviceCategory.ACCESSORIES;
    }
  });

  const title =
    category === DeviceCategory.SEARCH
      ? searchQuery
        ? `Search: "${searchQuery}"`
        : 'Search'
      : getTitle(category);

  const sortedPhones = sortDevices(productsOnPage, sortParams);

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

  const totalPages = Math.ceil(sortedPhones.length / +devicesPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs />
      </div>

      <h1 className={styles.title}>{title}</h1>

      <p className={styles.counter_text}>{sortedPhones.length} models</p>

      <div className={styles.dropdowns}>
        <div>
          <p className={styles.sort_by_text}>Sort by</p>

          <Select
            styles={customSortingStylesForDropdown}
            options={sortingParams}
            isSearchable={false}
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
          <p className={styles.sort_by_text}>Items on page</p>

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

      {category === DeviceCategory.SEARCH && (
        <form
          className={styles.pageSearchBar}
          onSubmit={value => handleSubmit(value)}
        >
          <InputBase
            className={styles.pageSearchBarField}
            placeholder="Search"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(event.target.value.trimStart());
            }}
          />
          {query && (
            <div
              className={styles.queryField__clearButton}
              onClick={() => setQuery('')}
            >
              x
            </div>
          )}
        </form>
      )}

      {loading ? (
        <SkeletonGrid itemsCount={Number(devicesPerPage)} />
      ) : (
        <ProductsList
          paginationOfDevice={paginationOfDevice}
          category={category}
        />
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
