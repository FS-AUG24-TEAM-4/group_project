import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { FirebaseError } from '@firebase/util';
import { PrimaryButton } from '@/components';
import { AuthErrors } from '@/enums/AuthErrors';
import { SuccessSnackbar } from '@/components/SuccessSnackbar/SuccessSnackbar';
import { ErrorSnackbar } from '@/components/ErrorSnackbar/ErrorSnackbar';

export const EmailAuth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const navigate = useNavigate();

  const handleFirebaseError = (code: string) => {
    switch (code) {
      case 'auth/invalid-email':
        setErrorMessage(AuthErrors.INVALID_EMAIL);
        break;
      case 'auth/user-not-found':
        setErrorMessage(AuthErrors.NO_EMAIL);
        break;
      case 'auth/wrong-password':
        setErrorMessage(AuthErrors.INCORRECT_PASSWORD);
        break;
      case 'auth/email-already-in-use':
        setErrorMessage(AuthErrors.EMAIL_USED);
        break;
      case 'auth/weak-password':
        setErrorMessage(AuthErrors.WEAK_PASSWORD);
        break;
      case 'auth/too-many-requests':
        setErrorMessage(AuthErrors.TOO_MANY_REQUESTS);
        break;
      default:
        setErrorMessage(AuthErrors.DEFAULT);
    }

    setOpenError(true);
  };

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Successfully signed in!');
      setOpenSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (signInError: unknown) {
      if (signInError instanceof FirebaseError) {
        handleFirebaseError(signInError.code);
      } else {
        setErrorMessage(`An unexpected error occurred: ${signInError}`);
        setOpenError(true);
      }
    }
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Account created successfully!');
      setOpenSuccess(true);
      await handleSignIn(event);
    } catch (signUpError: unknown) {
      if (signUpError instanceof FirebaseError) {
        handleFirebaseError(signUpError.code);
      } else {
        setErrorMessage(`An unexpected error occurred: ${signUpError}`);
        setOpenError(true);
      }
    }
  };

  return (
    <form className={styles.email_auth_form}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />

      <div className={styles.buttons}>
        <PrimaryButton onClick={handleSignIn}>Sign In</PrimaryButton>
        <PrimaryButton onClick={handleSignUp}>Sign Up</PrimaryButton>
      </div>

      {/* Snackbar для успішних повідомлень */}
      <SuccessSnackbar
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        message={successMessage}
      />

      {/* Snackbar для помилок */}
      <ErrorSnackbar
        open={openError}
        onClose={() => setOpenError(false)}
        message={errorMessage}
      />
    </form>
  );
};
