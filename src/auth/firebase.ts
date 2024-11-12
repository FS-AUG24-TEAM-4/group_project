import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  GithubAuthProvider,
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
export default app;
