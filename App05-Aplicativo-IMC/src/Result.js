import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente que exibe o resultado do IMC com a classificação
const Result = ({ imc, classificacao }) => {
  // Se não houver IMC calculado, o componente não será renderizado
  if (!imc) return null;

  // Define a cor da classificação do IMC
  let classificationColor = '#333'; // Cor padrão (cinza escuro)
  
  // Define a cor dependendo da classificação
  if (classificacao === 'Peso Normal') classificationColor = 'green'; // Verde para peso normal
  else if (classificacao === 'Sobrepeso' || classificacao.includes('Obesidade')) classificationColor = 'red'; // Vermelho para sobrepeso ou obesidade

  return (
    // Contêiner que envolve o texto com o resultado
    <View style={styles.resultContainer}>
      {/* Exibe o resultado do IMC com a cor correspondente à classificação */}
      <Text style={[styles.result, { color: classificationColor }]}>
        IMC: {imc} - {classificacao}
      </Text>
    </View>
  );
};

// Estilos para o contêiner e o texto de resultado
const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 20, // Espaço superior para separar do conteúdo acima
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  result: {
    fontSize: 18, // Define o tamanho da fonte
    fontWeight: 'bold', // Torna o texto em negrito
  },
});

export default Result; // Exporta o componente para ser usado em outros lugares

