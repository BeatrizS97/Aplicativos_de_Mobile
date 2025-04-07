import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Componente que exibe um título estilizado
const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>; // Retorna o texto com o estilo definido
};

// Estilos para o título
const styles = StyleSheet.create({
  title: {
    fontSize: 30, // Define o tamanho da fonte para um valor grande
    fontWeight: 'bold', // Torna o texto em negrito para chamar mais atenção
    color: '#4CAF50', // Define a cor do texto como verde vibrante (código hexadecimal)
    textAlign: 'center', // Centraliza o texto horizontalmente na tela
    letterSpacing: 1.5, // Aumenta o espaçamento entre as letras para dar mais "respiro"
    marginBottom: 15, // Adiciona espaço abaixo do título para distanciar dos outros elementos
    textShadowColor: 'green', // Define a cor da sombra do texto (preto)
    textShadowOffset: { width: 0, height: 1 }, // Define o deslocamento da sombra para dar profundidade
    textShadowRadius: 2, // Define a suavização (difusão) da sombra para um efeito mais suave
    fontFamily: 'Roboto', // Usa a fonte "Roboto", que é limpa e moderna
  },
});

export default Title; // Exporta o componente para ser usado em outros lugares

