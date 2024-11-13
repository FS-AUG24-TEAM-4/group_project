import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, facebookProvider } from '../firebase';
import { IconAuthButton } from '@/components/IconAuthButton/IconAuthButton';
import FacebookIcon from '@/assets/images/icons/FacebookIcon.svg';
import { useNavigate } from 'react-router-dom';
import { SuccessSnackbar } from '@/components/SuccessSnackbar';
import { ErrorSnackbar } from '@/components/ErrorSnackbar';

export const FacebookAuth: React.FC = () => {
  const navigate = useNavigate();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      setOpenSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setErrorMessage(`Facebook sign-in error: ${(error as Error).message}`);
      setOpenError(true);
    }
  };

  return (
    <>
      <IconAuthButton
        iconSrc={FacebookIcon}
        onClick={handleLogin}
        altText="FacebookIcon"
      />

      <SuccessSnackbar
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        message="Signed in with Facebook!"
      />

      <ErrorSnackbar
        open={openError}
        onClose={() => setOpenError(false)}
        message={errorMessage}
      />
    </>
  );
};
