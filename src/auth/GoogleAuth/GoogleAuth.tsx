import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@/assets/images/icons/GoogleIcon.svg';
import { IconAuthButton } from '@/components/IconAuthButton/IconAuthButton';

export const GoogleAuth: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Signed in with Google!');

      navigate('/');
    } catch (error) {
      alert(`Google sign-in error: ${error}`);
    }
  };

  return (
    <IconAuthButton
      iconSrc={GoogleIcon}
      onClick={handleGoogleSignIn}
      altText={'GoogleIcon'}
    />
  );
};
