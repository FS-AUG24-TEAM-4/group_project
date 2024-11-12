import cn from 'classnames';

import styles from './styles.module.scss';

interface Props {
  title: string;
  background: string;
}

export const EmptyPage: React.FC<Props> = ({ title, background }) => (
  <div className={cn(styles.emptyPage, styles[background])}>
    <p>{title}</p>
  </div>
);
