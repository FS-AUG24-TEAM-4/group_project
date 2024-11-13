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

export const EmailAuth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Successfully signed in!');
      navigate('/');
    } catch (signInError: unknown) {
      if (signInError instanceof FirebaseError) {
        switch (signInError.code) {
          case 'auth/invalid-email':
            alert(AuthErrors.INVALID_EMAIL);
            break;
          case 'auth/user-not-found':
            alert(AuthErrors.NO_EMAIL);
            break;
          case 'auth/wrong-password':
            alert(AuthErrors.INCORRECT_PASSWORD);
            break;
          case 'auth/too-many-requests':
            alert(AuthErrors.TOO_MANY_REQUESTS);
            break;
          default:
            alert(AuthErrors.DEFAULT);
        }
      } else {
        alert(`An unexpected error occurred:, ${signInError}`);
      }
    }
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      handleSignIn(event);
    } catch (signUpError: unknown) {
      if (signUpError instanceof FirebaseError) {
        switch (signUpError.code) {
          case 'auth/email-already-in-use':
            alert(AuthErrors.EMAIL_USED);
            break;
          case 'auth/invalid-email':
            alert(AuthErrors.INVALID_EMAIL);
            break;
          case 'auth/weak-password':
            alert(AuthErrors.WEAK_PASSWORD);
            break;
          case 'auth/too-many-requests':
            alert(AuthErrors.TOO_MANY_REQUESTS);
            break;
          default:
            alert(AuthErrors.DEFAULT);
        }
      } else {
        alert(`An unexpected error occurred:, ${signUpError}`);
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
    </form>
  );
};
