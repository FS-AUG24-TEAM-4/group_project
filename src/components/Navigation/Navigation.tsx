import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return cn(
      styles.navLink,
      {
        [styles.isActive]: isActive,
      }
    );
};

type Props = {
    links: {
        title: string,
        route: string,
    }[],
    isFooter?:boolean,
}

export const Navigation: FC<Props> = ({ links }) => {
    return <nav className={styles.nav}>
        {links.map(link => (
            <NavLink
                to={link.route}
                className={getLinkClassName}
                key={link.route}>
                {link.title}
            </NavLink>
        ))}
    </nav>
}