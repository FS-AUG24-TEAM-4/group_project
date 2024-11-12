import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import cn from 'classnames';

interface LogoutButtonProps {
  className?: string;
}
export const Logout: React.FC<LogoutButtonProps> = ({ className }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <button
      className={cn(className, styles.logout)}
      onClick={handleLogout}
    ></button>
  );
};
