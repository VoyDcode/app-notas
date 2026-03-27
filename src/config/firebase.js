import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD5VsOscNzUQu1xB3GOYJb4tT9G_caY5p0",
  authDomain: "appnotas-6644b.firebaseapp.com",
  projectId: "appnotas-6644b",
  storageBucket: "appnotas-6644b.firebasestorage.app",
  messagingSenderId: "646933545078",
  appId: "1:646933545078:web:3f0e30d878c748e06fdf57"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth;

try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  auth = getAuth(app);
}

const db = getFirestore(app);

export { auth, db };