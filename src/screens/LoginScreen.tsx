import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { auth } from '../services/firebaseConfig';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    console.log('Logado como:', userCredential.user.email);
    navigation.replace('Home');
  } catch (error: any) {
    Alert.alert('Erro ao logar', error.message);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="ENTRAR" onPress={handleLogin} />
      <Button title="CRIAR CONTA" onPress={() => navigation.navigate('Register')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 12, borderRadius: 6 },
});
