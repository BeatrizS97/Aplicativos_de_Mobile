import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './src/styles';
import InputField from './src/InputField';
import CustomButton from './src/CustomButton'


// Função principal do aplicativo
export default function App() {

  // Serve para armazenar os valores dos inputs e o resultado da multiplicação
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

// Função que serve para realizar a multiplicação dos números inseridos
function calcularMultiplicacao() {

  // Serve para verificar se ambos os valores foram inseridos corretamente
  if (num1 === '' || num2 === ''){
    alert('Insira os números nos dois campos');
    return;
  }

// Converte os valores para float e realiza a multiplicação
  setResultado(parseFloat(num1) * parseFloat(num2));
}
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        {/* Campo para inserir o primeiro número */}
        <InputField 
          placeholder="Insira o primeiro número..." 
          value={num1} 
          onChangeText={setNum1} 
        />

        {/* Campo para inserir o segundo número */}
        <InputField 
          placeholder="Insira o segundo número..." 
          value={num2} 
          onChangeText={setNum2} 
        />

        {/* Botão para calcular */}
        <CustomButton title="Calcular" onPress={calcularMultiplicacao} />

        {/* Exibe o resultado */}
        {resultado !== null && (
          <Text style={styles.texto}>Resultado: {resultado}</Text>
        )}
      </View>
    </View>
  );
}