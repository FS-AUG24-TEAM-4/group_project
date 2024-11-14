import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import styles from './styles.module.scss';
import cn from 'classnames';
import { SuccessSnackbar, LogoutConfirmationModal } from '@/components/';
import { useDispatch, useSelector } from 'react-redux';
import { changeBurgerState } from '@/features/burgermenu/burgerSlice';
import { RootState } from '@/app/store';

interface LogoutButtonProps {
  className?: string;
  type?: string;
}

export const Logout: React.FC<LogoutButtonProps> = ({ className }) => {
  const { logout } = useAuth();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  const handleLogout = async () => {
    await logout();
    setOpenSuccess(true);
    setShowModal(false);
    setTimeout(() => {
      if (burgerstatus) {
        dispatch(changeBurgerState());
      }
    }, 1500);
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
