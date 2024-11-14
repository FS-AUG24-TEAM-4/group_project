import cn from 'classnames';
import { FC, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { RootState } from '@/app/store';

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
  const dispatch = useDispatch();
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  return (
    <nav className={cn(styles.nav, { [styles.navFooter]: isFooter })}>
      {links.map(link => {
        const title = link.title;

        return (
          <Fragment key={link.route}>
            {isFooter ? (
              <Link
                to={link.route}
                onClick={() => {
                  if (burgerstatus) {
                    dispatch(changeBurgerState());
                  }
                }}
                className={cn(styles.navLink, styles.navLinkFooter)}
              >
                {t(`${title}`)}
              </Link>
            ) : (
              <NavLink
                onClick={() => {
                  if (burgerstatus) {
                    dispatch(changeBurgerState());
                  }
                }}
                to={link.route}
                className={getLinkClassName}
              >
                {t(`${title}`)}
              </NavLink>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};
