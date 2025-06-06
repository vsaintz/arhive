import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARKfIsD2WYBW863PCIftcskdtC1vDsEDk",
  authDomain: "arhive-966fc.firebaseapp.com",
  projectId: "arhive-966fc",
  storageBucket: "arhive-966fc.appspot.com",
  messagingSenderId: "127698288890",
  appId: "1:127698288890:web:cd0919ab627a5cfcf84943",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
