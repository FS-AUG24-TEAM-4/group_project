import React from 'react';
import { signInWithPopup, OAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import AppleIcon from '../../assets/images/icons/AppleIcon.svg';
import { ModalWindowError } from '@/components/ModalWindowError';

export const AppleAuth: React.FC = () => {
  const appleProvider = new OAuthProvider('apple.com');
  const navigate = useNavigate();

  const handleAppleSignIn = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      <ModalWindowError text={'Signed in with Apple!'} />;
      navigate('/');
    } catch (error) {
      <ModalWindowError text={`Apple sign-in error: ${error}`} />;
    }
  };

  return (
    <button className={styles.apple_auth_button} onClick={handleAppleSignIn}>
      <img src={AppleIcon} alt="Apple" className={styles.apple_icon} />
    </button>
  );
};
