import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// Componente CustomButton que serve para receber um título e uma função onPress como props
  export default function CustomButton({ title, onPress }) {
    return (
      // Pressable permite estilização mais avançada e interação personalizada
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
    );
  }

  // Serve para estilizar o botão
  const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E90FF', // Azul vibrante
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});