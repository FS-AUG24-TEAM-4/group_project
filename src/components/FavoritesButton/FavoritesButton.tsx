import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

export const FavoritesButton: FC<Props> = ({ children, isActive, onClick }) => {
  return (
    <button
      className={cn(styles.favorites_button, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
