import React from 'react';
import { EmailAuth } from '../../auth/EmailAuth/EmailAuth';
import { GoogleAuth } from '../../auth/GoogleAuth/GoogleAuth';
import { AppleAuth } from '../../auth/AppleAuth/AppleAuth';
import styles from './style.module.scss';

export const AuthPage: React.FC = () => {
  return (
    <div className={styles.auth_page}>
      <div className={styles.auth_container}>
        <div className={styles.email_auth_wrapper}>
          <EmailAuth />
        </div>
        <div className={styles.social_auth_wrapper}>
          <GoogleAuth />
          <AppleAuth />
        </div>
      </div>
    </div>
  );
};
