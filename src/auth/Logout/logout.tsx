import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import styles from './styles.module.scss';
import cn from 'classnames';
import { SuccessSnackbar } from '@/components/SuccessSnackbar';

interface LogoutButtonProps {
  className?: string;
}

export const Logout: React.FC<LogoutButtonProps> = ({ className }) => {
  const { logout } = useAuth();
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleLogout = async () => {
    await logout();
    setOpenSuccess(true);
  };

  return (
    <>
      <button
        className={cn(className, styles.logout)}
        onClick={handleLogout}
      ></button>

      <SuccessSnackbar
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        message="Logged out successfully!"
      />
    </>
  );
};
