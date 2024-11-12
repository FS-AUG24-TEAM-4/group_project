import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { auth, Logout } from '../../auth/';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Paths } from '@/enums';

interface AuthButtonProps {
  className?: string;
  type?: 'burger' | 'default';
}

export const AuthButton: FC<AuthButtonProps> = ({
  className,
  type = 'default',
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const isActive = location.pathname === Paths.AUTHENTICATION;

  if (isLoggedIn) {
    return <Logout className={className} />;
  }

  return (
    <Link
      to={Paths.AUTHENTICATION}
      className={cn(className, {
        [styles.login]: !isLoggedIn,
        [styles.isActive]: isActive,
        burger__footer__auth: type === 'burger',
      })}
    ></Link>
  );
};
