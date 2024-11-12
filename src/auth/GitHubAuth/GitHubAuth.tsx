import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, githubProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '../../assets/images/icons/GitHubIcon.svg';
import styles from './style.module.scss';
import { ModalWindowError } from '@/components/ModalWindowError';

export const GitHubAuth: React.FC = () => {
  const navigate = useNavigate();

  const handleGitHubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      <ModalWindowError text={'Signed in with GitHub!'} />;
      navigate('/');
    } catch (error) {
      <ModalWindowError text={`GitHub sign-in error: ${error}`} />;
    }
  };

  return (
    <button className={styles.github_auth_button} onClick={handleGitHubSignIn}>
      <img src={GitHubIcon} alt="GitHub" className={styles.github_icon} />
    </button>
  );
};
