import cn from 'classnames';
import { FC, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <nav className={cn(styles.nav, { [styles.navFooter]: isFooter })}>
      {links.map(link => {
        const title = link.title;

        return (
          <Fragment key={link.route}>
            {isFooter ? (
              <Link
                to={link.route}
                className={cn(styles.navLink, styles.navLinkFooter)}
              >
                {t(`${title}`)}
              </Link>
            ) : (
              <NavLink to={link.route} className={getLinkClassName}>
                {t(`${title}`)}
              </NavLink>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};
