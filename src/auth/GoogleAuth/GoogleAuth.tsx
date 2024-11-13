import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@/assets/images/icons/GoogleIcon.svg';
import { IconAuthButton } from '@/components/IconAuthButton/IconAuthButton';
import { SuccessSnackbar, ErrorSnackbar } from '@/components';

export const GoogleAuth: React.FC = () => {
  const navigate = useNavigate();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setOpenSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setErrorMessage(`Google sign-in error: ${(error as Error).message}`);
      setOpenError(true);
    }
  };

  return (
    <>
      <IconAuthButton
        iconSrc={GoogleIcon}
        onClick={handleLogin}
        altText="GoogleIcon"
      />

      <SuccessSnackbar
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        message="Signed in with Google!"
      />

      <ErrorSnackbar
        open={openError}
        onClose={() => setOpenError(false)}
        message={errorMessage}
      />
    </>
  );
};
