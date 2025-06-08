import { initializeApp, getApps, getApp } from 'firebase/app';
import { getReactNativePersistence, getAuth, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDFIzrFZAvOLCtZBkymBAXbKLaN-VNhO6g",
  authDomain: "safezoneapp-2b56b.firebaseapp.com",
  projectId: "safezoneapp-2b56b",
  storageBucket: "safezoneapp-2b56b.appspot.com",
  messagingSenderId: "967850600116",
  appId: "1:967850600116:web:835de3d61a1c694a22d9e1"
};

// Inicializa o app se necessário
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Inicializa o auth com persistência, evitando erro "already-initialized"
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} catch (e: any) {
  if (e.code === 'auth/already-initialized') {
    auth = getAuth(app);
  } else {
    throw e;
  }
}

export { app, auth };
