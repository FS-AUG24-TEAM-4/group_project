import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
