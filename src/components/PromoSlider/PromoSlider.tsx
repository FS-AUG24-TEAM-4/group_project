import cn from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SliderButton } from '../SliderButton';
import { SliderButtons } from '@/enums/SliderButtons';
import { useRef } from 'react';
import { InnerSliderButton } from '../InnerSliderButton';
import { Paths } from '@/enums';

export const PromoSlider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <>
      <div className={styles.wrapper}>
        <SliderButton type={SliderButtons.PREV} swiper={swiperRef} />

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={false}
          pagination={{ el: `.${styles.pagination}`, clickable: true }}
          loop={true}
          grabCursor={true}
          className={styles.slider}
        >
          <SwiperSlide>
            <video
              className={cn(styles.slide, styles.video)}
              autoPlay
              muted
              loop
            >
              <source
                src={'./src/assets/media/iphone-14-video.mp4'}
                type="video/mp4"
              />
            </video>
          </SwiperSlide>

          <SwiperSlide>
            <div className={cn(styles.slide, styles.firstSlide)}>
              <InnerSliderButton path={Paths.PHONES} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={cn(styles.slide, styles.secondSlide)}></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={cn(styles.slide, styles.thirdSlide)}></div>
          </SwiperSlide>
        </Swiper>

        <SliderButton type={SliderButtons.NEXT} swiper={swiperRef} />
      </div>

      <div className={styles.pagination}></div>
    </>
  );
};
