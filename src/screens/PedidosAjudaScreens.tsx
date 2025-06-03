import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import api from '../services/api';

interface Abrigo {
  id: number;
  nome: string;
  endereco: string;
  capacidade: number;
  ocupacaoAtual: number;
}

export default function AbrigosScreen() {
  const [abrigos, setAbrigos] = useState<Abrigo[]>([]);

  useEffect(() => {
    api.get('/Abrigo')
      .then(response => setAbrigos(response.data))
      .catch(error => console.error('Erro ao buscar abrigos:', error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={abrigos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text>{item.endereco}</Text>
            <Text>Capacidade: {item.capacidade}</Text>
            <Text>Ocupação: {item.ocupacaoAtual}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { backgroundColor: '#eee', marginBottom: 10, padding: 12, borderRadius: 8 },
  name: { fontWeight: 'bold', fontSize: 16 },
});
