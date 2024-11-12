import { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface IconAuthButtonProps {
  iconSrc: string;
  onClick: () => void;
  altText: string;
}

export const IconAuthButton: FC<IconAuthButtonProps> = ({
  iconSrc,
  onClick,
  altText,
}) => {
  return (
    <button className={cn(styles.authButton)} onClick={onClick}>
      <img src={iconSrc} alt={altText} className={styles.icon} />
    </button>
  );
};
