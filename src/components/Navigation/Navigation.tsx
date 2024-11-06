import cn from 'classnames';
import { FC, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return cn(styles.navLink, {
    [styles.isActive]: isActive,
  });
};

type Props = {
  links: {
    title: string;
    route: string;
  }[];
  isFooter?: boolean;
};

export const Navigation: FC<Props> = ({ links, isFooter = false }) => {
  return (
    <nav className={styles.nav}>
      {links.map(link => (
        <Fragment key={link.route}>
          {isFooter ? (
            <Link to={link.route} className={styles.navLink}>
              {link.title}
            </Link>
          ) : (
            <NavLink to={link.route} className={getLinkClassName}>
              {link.title}
            </NavLink>
          )}
        </Fragment>
      ))}
    </nav>
  );
};
