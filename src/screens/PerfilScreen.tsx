import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, View, StyleSheet } from 'react-native';
import { auth } from '../services/firebaseConfig';
import axios from 'axios';

export default function PerfilScreen({ navigation }: any) {
  const [abrigosCount, setAbrigosCount] = useState<number | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      // Buscar abrigos cadastrados pelo usuário
      axios.get(`http://10.0.2.2:5079/api/Abrigo/usuario/${user.id}`)

        .then(response => setAbrigosCount(response.data.length))

        .catch((error) => {
          console.error('Erro ao buscar abrigos:', error);
          Alert.alert('Erro ao buscar abrigos', error.message);
        });
    }
  }, []);

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
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.info}>
        Abrigos cadastrados: {abrigosCount !== null ? abrigosCount : 'Carregando...'}
      </Text>
      <View style={{ marginTop: 30 }}>
        <Button title="Sair da conta" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 }
});
