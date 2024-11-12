import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { InnerSliderBtn } from '@/enums/InnerSliderBtn';
import cn from 'classnames';

interface Props {
  path: string;
  theme: InnerSliderBtn;
  children: ReactNode;
}

export const InnerSliderButton: FC<Props> = ({ path, theme, children }) => {
  return (
    <Link
      to={path}
      className={cn(styles.button, {
        [styles.dark]: theme === InnerSliderBtn.DARK,
        [styles.light]: theme === InnerSliderBtn.LIGHT,
      })}
    >
      {children}
    </Link>
  );
};
