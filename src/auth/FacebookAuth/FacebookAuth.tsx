import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, facebookProvider } from '../firebase';
import { IconAuthButton } from '@/components/IconAuthButton/IconAuthButton';
import FacebookIcon from '@/assets/images/icons/FacebookIcon.svg';
import { useNavigate } from 'react-router-dom';

export const FacebookAuth: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert('Signed in with Facebook!');
      navigate('/');
    } catch (error) {
      alert(`Facebook sign-in error: ${error}`);
    }
  };

  return (
    <IconAuthButton
      iconSrc={FacebookIcon}
      onClick={handleLogin}
      altText={'FacebookIcon'}
    />
  );
};
