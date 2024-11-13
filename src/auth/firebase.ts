import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  GithubAuthProvider,
  RecaptchaVerifier,
  FacebookAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDEtrzRWBVFlvC25Ie7QzETe_UQrfK-XmY',
  authDomain: 'fs-aug24-team-4-group-project.firebaseapp.com',
  projectId: 'fs-aug24-team-4-group-project',
  storageBucket: 'fs-aug24-team-4-group-project.firebasestorage.app',
  messagingSenderId: '806584249632',
  appId: '1:806584249632:web:03d270cefb31fe1d5a3b45',
  measurementId: 'G-DJNRMF3VVB',
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const setupRecaptcha = (containerId: string): RecaptchaVerifier => {
  if (!auth) {
    throw new Error('Firebase auth not initialized');
  }

  const recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
    size: 'invisible',
    callback: () => {},
  });

  recaptchaVerifier.render();

  auth.settings.appVerificationDisabledForTesting = false;

  return recaptchaVerifier;
};

export default app;
