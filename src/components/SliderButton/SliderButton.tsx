import { FC } from 'react';
import { SwiperRef } from 'swiper/react';

import styles from './styles.module.scss';
import arrowLeft from '@/assets/images/icons/arrow-left.svg';
import arrowRight from '@/assets/images/icons/arrow-right.svg';
import { SliderButtons } from '@/enums';

interface Props {
  type: SliderButtons;
  swiper: React.MutableRefObject<SwiperRef | null>;
}

export const SliderButton: FC<Props> = ({ type, swiper }) => {
  const handlePrevClick = () => {
    swiper.current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiper.current?.swiper.slideNext();
  };

  return (
    <button
      className={styles.button}
      onClick={type === SliderButtons.PREV ? handlePrevClick : handleNextClick}
    >
      {type === SliderButtons.PREV ? (
        <img src={arrowLeft} alt="Arrow Left" />
      ) : (
        <img src={arrowRight} alt="Arrow Right" onClick={handleNextClick} />
      )}
    </button>
  );
};
