import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFIzrFZAvOLCtZBkymBAXbKLaN-VNhO6g",
  authDomain: "safezoneapp-2b56b.firebaseapp.com",
  projectId: "safezoneapp-2b56b",
  storageBucket: "safezoneapp-2b56b.firebasestorage.app",
  messagingSenderId: "967850600116",
  appId: "1:967850600116:web:835de3d61a1c694a22d9e1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
