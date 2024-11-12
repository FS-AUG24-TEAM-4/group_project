import cn from 'classnames';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Paths, SliderButtons, InnerSliderBtn } from '@/enums';

import styles from './styles.module.scss';
import { SliderButton } from '../SliderButton';
import { InnerSliderButton } from '../InnerSliderButton';
import adVideo from '/src/assets/media/iphone-14-video.mp4';

export const PromoSlider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div>
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
            <Link to={'/phones/apple-iphone-14-pro-512gb-spaceblack'}>
              <video
                className={cn(styles.slide, styles.firstSlide)}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={adVideo} type="video/mp4" />
              </video>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <div className={cn(styles.slide, styles.secondSlide)}>
              <div className={styles.secondSlideBtn}>
                <InnerSliderButton
                  path={'/phones/apple-iphone-14-pro-256gb-spaceblack'}
                  theme={InnerSliderBtn.LIGHT}
                >
                  Order now
                </InnerSliderButton>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={Paths.ACCESSORIES}>
              <div className={cn(styles.slide, styles.thirdSlide)}></div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={'/tablets/apple-ipad-pro-11-2021-128gb-spacegray'}>
              <div className={cn(styles.slide, styles.fourthSlide)}></div>
            </Link>
          </SwiperSlide>
        </Swiper>

        <SliderButton type={SliderButtons.NEXT} swiper={swiperRef} />
      </div>

      <div className={styles.pagination}></div>
    </div>
  );
};
