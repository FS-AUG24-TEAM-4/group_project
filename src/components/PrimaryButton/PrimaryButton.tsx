import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { PrimaryButtons } from '@/enums';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: PrimaryButtons;
  to?: string;
}

export const PrimaryButton: FC<Props> = ({ children, onClick, type, to }) => {
  return to ? (
    <Link className={cn(styles.button, styles.buttonHome)} to={to}>
      {children}
    </Link>
  ) : (
    <button
      className={cn(styles.button, {
        [styles.buttonCart]: type === PrimaryButtons.CART,
        [styles.buttonItemCart]: type === PrimaryButtons.ITEMCART,
        [styles.buttonCheckout]: type === PrimaryButtons.CHECKOUT,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
