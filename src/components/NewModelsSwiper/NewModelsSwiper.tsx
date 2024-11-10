import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './style.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '@/types/Product';
import classNames from 'classnames';

interface ProductSliderProps {
  products: Product[];
}

export const ProductSlider: FC<ProductSliderProps> = ({ products }) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const latestYear = Math.max(...products.map(product => product.year));
  const latestProducts = products.filter(
    product => product.year === latestYear,
  );

  if (latestProducts.length === 0) {
    return <p>No products available.</p>;
  }

  const handlePrevClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Brand new models</h2>
        <div className={styles.buttonsContainer}>
          <button
            className={classNames(styles.button, styles.decrease)}
            onClick={handlePrevClick}
          ></button>
          <button
            className={classNames(styles.button, styles.increase)}
            onClick={handleNextClick}
          ></button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, FreeMode]}
        slidesPerView={'auto'}
        spaceBetween={16}
        navigation={false}
        loop={true}
        grabCursor={true}
        freeMode={true}
      >
        {latestProducts.map(product => (
          <SwiperSlide className={styles.swiper_slide} key={product.id}>
            <ProductCard product={product} productPath={''} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
