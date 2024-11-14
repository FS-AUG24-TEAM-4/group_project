import React, { useState } from 'react';
import { ConfirmationResult, signInWithPhoneNumber } from 'firebase/auth';
import { auth, setupRecaptcha } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { SuccessSnackbar, ErrorSnackbar } from '@/components/';
import { useTranslation } from 'react-i18next';

export const PhoneAuth: React.FC = () => {
  const { t } = useTranslation();

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = async () => {
    setErrorMessage('');
    if (!phone) {
      setErrorMessage('Enter the phone number');
      setOpenError(true);

      return;
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
      setSuccessMessage('Code sent successfully!');
      setOpenSuccess(true);
    } catch (err) {
      setErrorMessage((err as Error).message);
      setOpenError(true);
    }
  };

  const handleVerifyCode = async () => {
    if (confirmationResult && code) {
      try {
        await confirmationResult.confirm(code);
        setSuccessMessage('Logged in successfully!');
        setOpenSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (err) {
        setErrorMessage('Wrong code, try again');
        setOpenError(true);
      }
    } else {
      setErrorMessage('Please enter the code');
      setOpenError(true);
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
            {t('sendCode')}
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

      {/* Відображення помилки */}
      {errorMessage && (
        <ErrorSnackbar
          open={openError}
          onClose={() => setOpenError(false)}
          message={errorMessage}
        />
      )}

      {/* Відображення успіху */}
      {successMessage && (
        <SuccessSnackbar
          open={openSuccess}
          onClose={() => setOpenSuccess(false)}
          message={successMessage}
        />
      )}
    </div>
  );
};
