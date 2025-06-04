import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AbrigosScreen from '../screens/AbrigosScreen';
import CadastroAbrigoScreen from '../screens/CadastroAbrigoScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import PedidosAjudaScreen from '../screens/PedidosAjudaScreens';
import PerfilScreen from '../screens/PerfilScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Abrigo } from '../types/Abrigo';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes({ isAuthenticated }: { isAuthenticated: boolean }) {

  return (
<Stack.Navigator
  initialRouteName={isAuthenticated ? 'Home' : 'Login'}
  screenOptions={{ headerShown: true }}
>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Abrigos" component={AbrigosScreen} />
      <Stack.Screen name="PedidosAjuda" component={PedidosAjudaScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="CadastroAbrigo" component={CadastroAbrigoScreen} />
    </Stack.Navigator>
  );
  
}

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  PedidosAjuda: undefined;
  Abrigos: undefined;
  Perfil: undefined;
  CadastroAbrigo: { abrigo?: Abrigo }; 
};
