import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { FirebaseError } from '@firebase/util';

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
            alert('Invalid email format.');
            break;
          case 'auth/user-not-found':
            alert('No user found with this email.');
            break;
          case 'auth/wrong-password':
            alert('Incorrect password.');
            break;
          case 'auth/too-many-requests':
            alert('Too many attempts. Try again later.');
            break;
          default:
            alert('Something went wrong. Please try again.');
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
            alert('This email is already registered.');
            break;
          case 'auth/invalid-email':
            alert('Invalid email format.');
            break;
          case 'auth/weak-password':
            alert('Password is too weak. Minimum 6 characters.');
            break;
          case 'auth/too-many-requests':
            alert('Too many attempts. Try again later.');
            break;
          default:
            alert('Something went wrong. Please try again.');
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
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </form>
  );
};
