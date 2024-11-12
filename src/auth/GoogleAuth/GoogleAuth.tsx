import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import GoogleIcon from '../../assets/images/icons/GoogleIcon.svg';
import { ModalWindowError } from '@/components/ModalWindowError';

export const GoogleAuth: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      <ModalWindowError text={'Signed in with Google!'} />;

      navigate('/');
    } catch (error) {
      <ModalWindowError text={`Google sign-in error: ${error}`} />;
    }
  };

  return (
    <button className={styles.google_auth_button} onClick={handleGoogleSignIn}>
      <img src={GoogleIcon} alt="Google" className={styles.google_icon} />
    </button>
  );
};
