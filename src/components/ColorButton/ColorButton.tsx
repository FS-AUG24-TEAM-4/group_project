import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  color: string;
  pathname: string;
  isSelected: boolean;
}

export const ColorButton: FC<Props> = ({ color, pathname, isSelected }) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.selected]: isSelected,
      })}
    >
      <Link
        className={styles.button}
        to={pathname}
        style={{
          backgroundColor: color,
        }}
      ></Link>
    </div>
  );
};
