import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export const Indicator: FC<Props> = ({ children }) => {
  return <div className={styles.indicator}>{children}</div>;
};
