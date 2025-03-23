import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// Componente funcional que representa um campo de entrada de texto
export default function InputField({ placeholder, value, onChangeText }) {
  return (
    <TextInput
    style={styles.input} 
    placeholder={placeholder}
    keyboardType="numeric"
    value={value}
    onChangeText={onChangeText}
    />
  );
}

// Serve para estilizar o campo de entrada
  const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#1E90FF',
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});