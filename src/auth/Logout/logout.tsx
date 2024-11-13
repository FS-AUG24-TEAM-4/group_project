import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import styles from './styles.module.scss';
import cn from 'classnames';
import { SuccessSnackbar, LogoutConfirmationModal } from '@/components/';
import { useDispatch } from 'react-redux';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';

interface LogoutButtonProps {
  className?: string;
  type?: string;
}

export const Logout: React.FC<LogoutButtonProps> = ({ className, type }) => {
  const { logout } = useAuth();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    setOpenSuccess(true);
    setShowModal(false);
    if (type === 'burger') {
      dispatch(changeBurgerState());
    }
  };

  return (
    <>
      <button
        className={cn(className, styles.logout)}
        onClick={() => setShowModal(true)}
      ></button>

      <LogoutConfirmationModal
        isOpen={showModal}
        onConfirm={handleLogout}
        onCancel={() => setShowModal(false)}
      />

      <SuccessSnackbar
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        message="Logged out successfully!"
      />
    </>
  );
};
