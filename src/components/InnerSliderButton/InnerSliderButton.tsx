import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Props {
  path: string;
}

export const InnerSliderButton: FC<Props> = ({ path }) => {
  return (
    <Link to={path} className={styles.button}>
      Order now
    </Link>
  );
};
