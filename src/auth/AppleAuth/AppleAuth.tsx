import React from 'react';
import { signInWithPopup, OAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import AppleIcon from '@/assets/images/icons/AppleIcon.svg';
import { IconAuthButton } from '@/components/IconAuthButton/IconAuthButton';

export const AppleAuth: React.FC = () => {
  const appleProvider = new OAuthProvider('apple.com');
  const navigate = useNavigate();

  const handleAppleSignIn = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      alert('Signed in with Apple!');
      navigate('/');
    } catch (error) {
      alert(`Apple sign-in error: ${error}`);
    }
  };

  return (
    <IconAuthButton
      iconSrc={AppleIcon}
      onClick={handleAppleSignIn}
      altText={'AppleIcon'}
    />
  );
};
