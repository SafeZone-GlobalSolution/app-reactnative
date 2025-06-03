import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import LoginScreen from '../screens/LoginScreen';
import { auth } from '../services/firebaseConfig';
import AppRoutes from './AppRoutes';

export default function PrivateRoutes() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth as any);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return null;

  return user ? <AppRoutes /> : <LoginScreen navigation={{ navigate: () => {} }} />;
}
