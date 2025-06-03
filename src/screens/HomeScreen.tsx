import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title="Abrigos" onPress={() => navigation.navigate('Abrigos')} />
      <Button title="Pedidos de Ajuda" onPress={() => navigation.navigate('PedidosAjuda')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 10, padding: 20 },
});
