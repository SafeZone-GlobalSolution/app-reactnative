import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { API_URL } from '@env';

export default function CadastroAbrigoScreen() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [capacidade, setCapacidade] = useState('');

  const handleCadastro = async () => {
    if (!nome || !endereco || !capacidade) {
      Alert.alert('Erro', 'Preencha todos os campos antes de cadastrar.');
      return;
    }

 setLoading(true);

 const novoAbrigo = {
   nome,
   endereco,
   capacidade: parseInt(capacidade), // se for string
   disponivel: true,
   latitude: 0,
   longitude: 0
 };

 try {
   await axios.post(`${API_URL}/abrigo`, novoAbrigo);
   Alert.alert('Sucesso', 'Abrigo cadastrado com sucesso!');
   navigation.goBack();
 } catch (error) {
   Alert.alert('Erro', 'Erro ao cadastrar o abrigo.');
   console.error("Erro detalhado:", error?.response || error?.message || error);
 } finally {
   setLoading(false);
 }

  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Endereço:</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />

      <Text>Capacidade:</Text>
      <TextInput
        style={styles.input}
        value={capacidade}
        onChangeText={setCapacidade}
        keyboardType="numeric"
      />

      <Button disabled={loading && <ActivityIndicator size="large" color="#0000ff" />}
        title="CADASTRAR ABRIGO"
        onPress={handleCadastro}
        disabled={!nome || !endereco || !capacidade}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f3f3f3' },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
});
