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
    <nav className={cn(styles.nav, { [styles.navFooter]: isFooter })}>
      {links.map(link => (
        <Fragment key={link.route}>
          {isFooter ? (
            <Link
              to={link.route}
              className={cn(styles.navLink, styles.navLinkFooter)}
            >
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
