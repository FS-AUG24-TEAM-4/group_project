import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, githubProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@/assets/images/icons/GitHubIcon.svg';
import { IconAuthButton } from '@/components/IconAuthButton/IconAuthButton';

export const GitHubAuth: React.FC = () => {
  const navigate = useNavigate();

  const handleGitHubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      alert('Signed in with GitHub!');
      navigate('/');
    } catch (error) {
      alert(`GitHub sign-in error: ${error}`);
    }
  };

  return (
    <IconAuthButton
      iconSrc={GitHubIcon}
      onClick={handleGitHubSignIn}
      altText={'GitHubIcon'}
    />
  );
};
