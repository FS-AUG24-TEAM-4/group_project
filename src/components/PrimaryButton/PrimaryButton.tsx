import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { PrimaryButtons } from '../../enums/PrimaryButtons';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: PrimaryButtons;
  to?: string;
  isActive?: boolean;
}

export const PrimaryButton: FC<Props> = ({
  children,
  onClick,
  type,
  to,
  isActive,
}) => {
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
        [styles.buttonCancelCheckout]: type === PrimaryButtons.CANCELCHECKOUT,
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
