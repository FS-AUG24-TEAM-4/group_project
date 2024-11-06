import { usePhones } from '../../hooks/usePhone';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './styles.module.scss';
import bread__img from '../../assets/breadcrumbs-img/Breadcrumbs.png';
import { sortDevices } from '@/utils/sortDevices';
import { useState } from 'react';
import { SortType } from '@/enums/SortType';
import { useProducts } from '@/hooks/useProducts';
import Select from 'react-select';

export const PhonesList = () => {
  const { phones, loading, error } = usePhones();
  const { products } = useProducts();
  const [sort, setSort] = useState<SortType>(SortType.NONE);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const sortedPhones = sortDevices(phones, sort, products);
  const sortingParams = [
    { value: SortType.NONE, label: 'None' },
    { value: SortType.NEWEST, label: 'Newest' },
    { value: SortType.OLDEST, label: 'Oldest' },
    { value: SortType.PRICE_HIGH, label: 'Price high' },
    { value: SortType.PRICE_LOW, label: 'Price low' },
  ];

  // type ProvidedControl = {
  //   '&:hover': 'borderCOlor: "#2684FF"';
  //   alignItems: 'center';
  //   backgroundColor: 'hsl(0, 0%, 100%)';
  //   borderColor: '#2684FF';
  //   borderRadius: 4;
  //   borderStyle: 'solid';
  //   borderWidth: 1;
  //   boxShadow: '0 0 0 1px #2684FF';
  //   boxSizing: 'border-box';
  //   cursor: 'default';
  //   display: 'flex';
  //   flexWrap: 'wrap';
  //   justifyContent: 'space-between';
  //   label: 'control';
  //   minHeight: 38;
  //   outline: '0 !important';
  //   position: 'relative';
  //   transition: 'all 100ms';
  // };

  // type ProvidedOption = {
  //   ':active': 'backgroundColor: "#B2D4FF"';
  //   WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)';
  //   backgroundColor: 'transparent';
  //   boxSizing: 'border-box';
  //   color: 'inherit';
  //   cursor: 'default';
  //   display: 'block';
  //   fontSize: 'inherit';
  //   label: 'option';
  //   padding: '8px 12px';
  //   userSelect: 'none';
  //   width: '100%';
  // };

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
            onChange={value => setSort(value!.value)}
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
    </div>
  );
};
