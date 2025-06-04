import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroAbrigoScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [capacidade, setCapacidade] = useState('');

  const handleCadastro = async () => {
    if (!nome || !endereco || !capacidade) {
      Alert.alert('Erro', 'Preencha todos os campos antes de cadastrar.');
      return;
    }

    try {
      const novoAbrigo = {
        nome,
        endereco,
        capacidade: parseInt(capacidade),
      };

      await axios.post('http://localhost:5079/api/abrigo', novoAbrigo); // Altere se estiver em produção

      Alert.alert('Sucesso', 'Abrigo cadastrado com sucesso!');
      navigation.goBack(); // Retorna para a tela anterior
    } catch (error) {
      Alert.alert('Erro', 'Erro ao cadastrar o abrigo.');
      console.error(error);
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

      <Button
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
