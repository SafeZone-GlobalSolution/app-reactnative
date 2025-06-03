import { signOut } from 'firebase/auth';
import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { auth } from '../services/firebaseConfig';

export default function PerfilScreen({ navigation }: any) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Logout realizado com sucesso!");
        navigation.replace("Login");
      })
      .catch((error) => {
        Alert.alert("Erro ao deslogar", error.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil</Text>
      <Button title="Sair da conta" onPress={handleLogout} />
    </View>
  );
}
