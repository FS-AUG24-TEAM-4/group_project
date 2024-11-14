import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';
import blankIconDark from '../../assets/images/icons/favorites-blank.svg';
// eslint-disable-next-line max-len
import blankIconLight from '../../assets/images/icons/dark-mode/favorites-blank.svg';
import filledIcon from '../../assets/images/icons/favorites-filled.svg';
import { useTheme } from '@/hooks/useTheme';

interface Props {
  isActive: boolean;
  onClick?: () => void;
}

export const FavoritesButton: FC<Props> = ({ isActive, onClick }) => {
  const { theme } = useTheme();

  const blankIcon = theme ? blankIconLight : blankIconDark;

  return (
    <button
      className={cn(styles.favorites_button, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      <img src={isActive ? filledIcon : blankIcon} />
    </button>
  );
};
