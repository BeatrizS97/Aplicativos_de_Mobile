import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

// Componente Button que renderiza um botão estilizado
const Button = ({ text, onPress }) => {
  return (
    // Pressable é usado para tornar o botão interativo e responsivo ao toque
    <Pressable style={styles.button} onPress={onPress}>
      {/* Exibe o texto do botão com o estilo aplicado */}
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

// Estilos do botão e do texto
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50', // Cor de fundo verde para o botão
    paddingVertical: 15, // Espaço vertical dentro do botão
    paddingHorizontal: 30, // Espaço horizontal dentro do botão
    borderRadius: 20, // Bordas arredondadas no botão
    elevation: 5, // Elevação para a sombra no Android
    shadowOpacity: 0.2, // Opacidade da sombra (translúcida)
    shadowRadius: 8, // Difusão da sombra
    shadowColor: '#000', // Cor da sombra (preta)
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra para baixo
  },
  buttonText: {
    color: '#FFF', // Cor do texto (branco)
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Estilo de fonte em negrito
    textShadowColor: '#000', // Cor da sombra do texto (preto)
  },
});

export default Button;

