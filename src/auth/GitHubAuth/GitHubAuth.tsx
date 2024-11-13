import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, githubProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@/assets/images/icons/GitHubIcon.svg';
import { IconAuthButton } from '@/components/IconAuthButton/IconAuthButton';
import { SuccessSnackbar, ErrorSnackbar } from '@/components/';

export const GitHubAuth: React.FC = () => {
  const navigate = useNavigate();
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGitHubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      setOpenSuccess(true);
      navigate('/');
    } catch (error) {
      setErrorMessage(`GitHub sign-in error: ${(error as Error).message}`);
      setOpenError(true);
    }
  };

  return (
    <>
      <IconAuthButton
        iconSrc={GitHubIcon}
        onClick={handleGitHubSignIn}
        altText="GitHubIcon"
      />

      <SuccessSnackbar
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        message="Signed in with GitHub!"
      />

      <ErrorSnackbar
        open={openError}
        onClose={() => setOpenError(false)}
        message={errorMessage}
      />
    </>
  );
};
