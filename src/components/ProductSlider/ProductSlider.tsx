import { FC, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './style.module.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '@/types/Product';
import { IconButton } from '../IconButton';
import { useProducts } from '@/hooks';
import { SkeletonGrid } from '../Skeleton';

interface ProductSliderProps {
  products: Product[];
  title: string;
  discount?: boolean;
}

export const ProductSlider: FC<ProductSliderProps> = ({
  products,
  title,
  discount = true,
}) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const { loading } = useProducts();

  const handlePrevClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.buttonsContainer}>
          <IconButton icon="arrow-left" onClick={handlePrevClick} />
          <IconButton icon="arrow-rigth" onClick={handleNextClick} />
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
        {loading
          ? Array.from({ length: 16 }).map((_, index) => (
              <SwiperSlide
                className={styles.swiper_slide}
                key={`skeleton-${index}`}
              >
                <SkeletonGrid itemsCount={1} />
              </SwiperSlide>
            ))
          : products.map(product => (
              <SwiperSlide className={styles.swiper_slide} key={product.id}>
                <ProductCard
                  product={product}
                  productPath={`/${product.category}/${product.itemId}`}
                  type="slider"
                  discount={discount}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};
