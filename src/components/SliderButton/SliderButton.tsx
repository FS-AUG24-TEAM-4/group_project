import { FC } from 'react';

import styles from './styles.module.scss';
import arrowLeft from '@/assets/images/icons/arrow-left.svg';
import arrowRight from '@/assets/images/icons/arrow-right.svg';
import { SliderButtons } from '../../enums/SliderButtons';

interface Props {
  type: SliderButtons;
}

export const SliderButton: FC<Props> = ({ type }) => {
  return (
    <button className={styles.button}>
      {type === SliderButtons.PREV ? (
        <img src={arrowLeft} alt="Arrow Left" />
      ) : (
        <img src={arrowRight} alt="Arrow Right" />
      )}
    </button>
  );
};
