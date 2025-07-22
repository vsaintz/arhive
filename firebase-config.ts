import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getAuth, Auth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// @ts-ignore
import { getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
  // Firebase API Key
 
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
