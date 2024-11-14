import { FC } from 'react';
import { SwiperRef } from 'swiper/react';

import styles from './styles.module.scss';
import arrowLeftLight from '@/assets/images/icons/arrow-left.svg';
import arrowRightLight from '@/assets/images/icons/arrow-right.svg';
import arrowLeftDark from '@/assets/images/icons/dark-mode/arrow-left.svg';
import arrowRightDark from '@/assets/images/icons/dark-mode/arrow-right.svg';
import { SliderButtons } from '@/enums';
import { useTheme } from '@/hooks/useTheme';
import { Themes } from '@/enums/Themes';

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

  const { theme } = useTheme();

  return (
    <button
      className={styles.button}
      onClick={type === SliderButtons.PREV ? handlePrevClick : handleNextClick}
    >
      {type === SliderButtons.PREV ? (
        <img
          src={theme === Themes.DARK ? arrowLeftDark : arrowLeftLight}
          alt="Arrow Left"
        />
      ) : (
        <img
          src={theme === Themes.DARK ? arrowRightDark : arrowRightLight}
          alt="Arrow Right"
          onClick={handleNextClick}
        />
      )}
    </button>
  );
};
