import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  pathname: string;
  isSelected: boolean;
}

export const ParameterButton: FC<Props> = ({
  pathname,
  children,
  isSelected,
}) => {
  return (
    <Link
      className={cn(styles.button, { [styles.buttonSelected]: isSelected })}
      to={pathname}
    >
      {children}
    </Link>
  );
};
