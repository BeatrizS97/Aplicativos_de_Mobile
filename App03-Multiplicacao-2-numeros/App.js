import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TitleBox from './src/TitleBox';
import InputNumber from './src/InputNumber';
import AppButton from './src/AppButton';
import ResultBox from './src/ResultBox';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  // Função que faz a multiplicação quando o botão é clicado
  const calcular = () => {
    const valor1 = parseFloat(num1);
    const valor2 = parseFloat(num2);

    if (!isNaN(valor1) && !isNaN(valor2)) {
      setResultado(valor1 * valor2);
    } else {
      setResultado('⚠️ Digite apenas números!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Título usando props */}
      <TitleBox titulo="Multiplicador de Números" />

      {/* Inputs com props para capturar os valores */}
      <InputNumber
        placeholder="Insira o primeiro número..."
        value={num1}
        onChangeText={setNum1}
      />
      <InputNumber
        placeholder="Insira o segundo número..."
        value={num2}
        onChangeText={setNum2}
      />

      {/* Botão com props */}
      <AppButton label="Calcular" onPress={calcular} />

      {/* Resultado da multiplicação */}
      <ResultBox resultado={resultado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6fd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
