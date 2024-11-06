import { usePhones } from '../../hooks/usePhone';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './styles.module.scss';
import bread__img from '../../assets/breadcrumbs-img/Breadcrumbs.png';
import { sortDevices } from '@/utils/sortDevices';
import { useState } from 'react';
import { SortType } from '@/enums/SortType';
import { useProducts } from '@/hooks/useProducts';
import Select from 'react-select';
import ResponsivePagination from 'react-responsive-pagination';
import './pagination.scss';
import { getSearchWith } from '@/utils/getSearchWith';
import { useSearchParams } from 'react-router-dom';

export const PhonesList = () => {
  const [searchParams] = useSearchParams();
  const { phones, loading, error } = usePhones();
  const { products } = useProducts();
  const [, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(15);

  const sortingParams = [
    { value: SortType.NONE, label: 'None' },
    { value: SortType.NEWEST, label: 'Newest' },
    { value: SortType.OLDEST, label: 'Oldest' },
    { value: SortType.PRICE_HIGH, label: 'Price high' },
    { value: SortType.PRICE_LOW, label: 'Price low' },
  ];

  const sortParams = searchParams.get('sort') || SortType.NONE;

  function handlePageChange(page: number) {
    setCurrentPage(page);
    setSearchParams(currentParams => {
      const settingPage = page >= 2 ? page.toString() : null;

      return getSearchWith(currentParams, { page: settingPage });
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleSortingDropdownValue = () => {
    const currentParams = sortingParams.find(
      param => param.value === sortParams,
    );

    if (currentParams) {
      return currentParams.value === SortType.NONE ? null : currentParams;
    }

    return null;
  };

  const sortedPhones = sortDevices(phones, sortParams, products);

  const customSortingStylesForDropdown = {
    control: (provided: object) => ({
      ...provided,
      width: '176px',
      height: '40px',
      border: '1px solid #B4BDC3',
      borderRadius: '8px',
    }),
    option: (provided: object) => ({
      ...provided,
    }),
  };

  const totalPages = 5;

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
            value={handleSortingDropdownValue()}
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
      </div>

      {sortedPhones && (
        <article className={styles.phones_list}>
          {sortedPhones.map(phone => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </article>
      )}

      <ResponsivePagination
        total={totalPages}
        current={currentPage}
        onPageChange={page => handlePageChange(page)}
      />
    </div>
  );
};
