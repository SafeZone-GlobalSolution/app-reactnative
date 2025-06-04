import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { auth } from '../services/firebaseConfig';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title="Abrigos" onPress={() => navigation.navigate('Abrigos')} />
      <Button title="Pedidos de Ajuda" onPress={() => navigation.navigate('PedidosAjuda')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
      <Button title="Cadastrar Abrigo" onPress={() => navigation.navigate('CadastroAbrigo')} />
      <Button title="Sair" onPress={() => {
        signOut(auth);
        navigation.replace('Login');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 10, padding: 20 },
});
