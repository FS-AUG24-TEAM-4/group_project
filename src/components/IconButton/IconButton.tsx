import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

interface Props {
  icon: string;
  onClick?: () => void;
}

export const IconButton: FC<Props> = ({ icon, onClick }) => {
  return (
    <button
      className={cn(styles.iconButton, styles[icon])}
      onClick={onClick}
    ></button>
  );
};
