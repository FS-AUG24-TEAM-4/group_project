import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { auth, Logout } from '../../auth/';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Paths } from '@/enums';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';

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
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setTimeout(() => {
          setIsLoggedIn(false);
        }, 2000);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleClick = () => {
    if (burgerstatus) {
      dispatch(changeBurgerState());
    }
  };

  const isActive = location.pathname === Paths.AUTHENTICATION;

  if (isLoggedIn) {
    return <Logout className={className} type="burger" />;
  }

  return (
    <Link
      to={Paths.AUTHENTICATION}
      className={cn(className, {
        [styles.login]: !isLoggedIn,
        [styles.isActive]: isActive,
        burger__footer__auth: type === 'burger',
      })}
      onClick={() => {
        if (burgerstatus) {
          dispatch(changeBurgerState());
        }

        handleClick();
      }}
    ></Link>
  );
};
