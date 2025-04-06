import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Componente de botão com props: label e ação ao clicar
export default function AppButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0077cc',
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});