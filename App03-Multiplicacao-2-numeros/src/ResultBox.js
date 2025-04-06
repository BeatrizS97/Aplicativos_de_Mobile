import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Componente que exibe o resultado se houver
export default function ResultBox({ resultado }) {
  if (resultado === null) return null;

  return <Text style={styles.resultado}>Resultado: {resultado}</Text>;
}

const styles = StyleSheet.create({
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
