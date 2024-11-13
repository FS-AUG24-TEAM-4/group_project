import React from 'react';
import { EmailAuth, GitHubAuth, GoogleAuth, FacebookAuth } from '../../auth/';
import { PhoneAuth } from '@/auth/PhoneAuth/PhoneAuth';
import styles from './style.module.scss';

export const AuthPage: React.FC = () => {
  return (
    <div className={styles.auth_page}>
      <div className={styles.auth_container}>
        <div className={styles.email_auth_wrapper}>
          <EmailAuth />
          <div className={styles.divider}>or sign-in with phone</div>
          <PhoneAuth />
        </div>

        <div className={styles.social_auth_wrapper}>
          <FacebookAuth />
          <GoogleAuth />
          <GitHubAuth />
        </div>
      </div>
    </div>
  );
};
