import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getAuth, Auth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// @ts-ignore
import { getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARKfIsD2WYBW863PCIftcskdtC1vDsEDk",
  authDomain: "arhive-966fc.firebaseapp.com",
  projectId: "arhive-966fc",
  storageBucket: "arhive-966fc.appspot.com",
  messagingSenderId: "127698288890",
  appId: "1:127698288890:web:cd0919ab627a5cfcf84943",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth: Auth;

try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (err: any) {
  if (err.code === 'auth/already-initialized') {
    auth = getAuth(app);
  } else {
    throw err;
  }
}

export { auth };
