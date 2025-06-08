import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Abrigo {
  id: number;
  nome: string;
  endereco: string;
  capacidade: number;
}

export default function AbrigosScreen() {
  const [abrigos, setAbrigos] = useState<Abrigo[]>([]);

  useEffect(() => {
    const fetchAbrigos = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5079/api/abrigo');
        console.log("Abrigoss:", response.data);
        setAbrigos(response.data);
      } catch (error) {
        console.error('Erro ao buscar abrigos:', error);
      }
    };

    fetchAbrigos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={abrigos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text>Endereço: {item.endereco}</Text>
            <Text>Capacidade: {item.capacidade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
