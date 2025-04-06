import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Componente que recebe um título via props
export default function TitleBox({ titulo }) {
  return <Text style={styles.titulo}>{titulo}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#005baa',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

