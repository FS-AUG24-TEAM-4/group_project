import cn from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SliderButton } from '../SliderButton';
import { SliderButtons } from '@/enums/SliderButtons';

export const PromoSlider = () => {
  return (
    <div className={styles.wrapper}>
      <SliderButton type={SliderButtons.PREV} />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        autoplay={5000}
        className={styles.slider}
      >
        <SwiperSlide>
          <div className={cn(styles.slide, styles.firstSlide)}></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={cn(styles.slide, styles.secondSlide)}></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={cn(styles.slide, styles.thirdSlide)}></div>
        </SwiperSlide>
      </Swiper>

      <SliderButton type={SliderButtons.NEXT} />
    </div>
  );
};
