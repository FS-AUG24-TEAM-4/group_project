import React, { useState } from 'react';
import { ConfirmationResult, signInWithPhoneNumber } from 'firebase/auth';
import { auth, setupRecaptcha } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export const PhoneAuth: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSendCode = async () => {
    setError(null);
    if (!phone) {
      return setError('Enter the phone number');
    }

    try {
      const recaptchaVerifier = setupRecaptcha('recaptcha-container');
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        recaptchaVerifier,
      );

      setConfirmationResult(confirmation);
      setIsCodeSent(true);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleVerifyCode = async () => {
    if (confirmationResult && code) {
      try {
        await confirmationResult.confirm(code);
        alert('Loged in succesfully!');
        navigate('/');
      } catch (err) {
        setError('Wrong number, try again');
      }
    }
  };

  return (
    <div className={styles.phoneAuth}>
      <div id="recaptcha-container"></div>
      {!isCodeSent ? (
        <>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+380XXXXXXXXX"
            className={styles.input}
          />
          <button onClick={handleSendCode} className={styles.button}>
            Send code
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Enter the code from SMS"
            className={styles.input}
          />
          <button onClick={handleVerifyCode} className={styles.button}>
            Confirm code
          </button>
        </>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
