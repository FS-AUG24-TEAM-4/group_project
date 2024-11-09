import cn from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

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
