import React, { useState } from 'react';  
import { View, StyleSheet, Text, Animated, TouchableOpacity, TextInput, Keyboard, Platform } from 'react-native'; 
import Title from './src/Title'; 
import IMCImage from './src/IMCImage'; 
import InputField from './src/InputField'; 
import Button from './src/Button';
import Result from './src/Result'; 

const App = () => {
  // Estado para armazenar o peso, altura, IMC e a classificação
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  // Função para calcular o IMC
  const calcularIMC = () => {
    // Verifica se o peso ou a altura são válidos, caso contrário, exibe um alerta
    if (!peso || !altura || isNaN(peso) || isNaN(altura)) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    // Substitui a vírgula por ponto para garantir que a altura seja tratada corretamente
    let alturaConvertida = altura.replace(',', '.');

    let alturaEmMetros;

    // Verifica se a altura informada é menor que 3 para considerar metros, senão, assume centímetros
    if (alturaConvertida < 3) {
      alturaEmMetros = parseFloat(alturaConvertida); // Caso altura em metros
    } else {
      alturaEmMetros = parseFloat(alturaConvertida) / 100; // Caso altura em centímetros, converte para metros
    }

    // Cálculo do IMC: peso dividido pela altura ao quadrado
    const imcCalculado = (parseFloat(peso) / (alturaEmMetros * alturaEmMetros)).toFixed(1);
    
    // Atualiza o estado do IMC calculado
    setIMC(imcCalculado);

    // Chama a função para definir a classificação do IMC
    definirClassificacao(imcCalculado);
  };

  // Função para definir a classificação do IMC
  const definirClassificacao = (imc) => {
    // Baseado no valor do IMC, define a classificação de acordo com as faixas estabelecidas
    if (imc < 18.5) setClassificacao('Abaixo do Peso');
    else if (imc >= 18.5 && imc <= 24.9) setClassificacao('Peso Normal');
    else if (imc >= 25 && imc <= 29.9) setClassificacao('Sobrepeso');
    else if (imc >= 30 && imc <= 34.9) setClassificacao('Obesidade Grau I');
    else if (imc >= 35 && imc <= 39.9) setClassificacao('Obesidade Grau II');
    else setClassificacao('Obesidade Grau III ou Mórbida');
  };

  return (
    // Container principal que envolve todos os componentes da interface
    <View style={styles.container}>
      {/* Exibe o título da aplicação */}
      <Title text="Cálculo do IMC" />
      
      {/* Exibe uma imagem relacionada ao IMC */}
      <IMCImage />
      
      {/* Componente de entrada para o peso */}
      <InputField
        placeholder="Peso (kg)" // Texto no campo de entrada
        value={peso} // Valor armazenado no estado
        onChangeText={setPeso} // Atualiza o estado com o valor do peso
        icon="⚖️ " // Ícone para ilustrar o campo de peso
      />
      
      {/* Componente de entrada para a altura */}
      <InputField
        placeholder="Altura (em metros ou cm)" // Texto no campo de entrada
        value={altura} // Valor armazenado no estado
        onChangeText={setAltura} // Atualiza o estado com o valor da altura
        icon="📏" // Ícone para ilustrar o campo de altura
      />

      {/* Botão que, ao ser pressionado, chama a função para calcular o IMC */}
      <Button text="Verificar" onPress={calcularIMC} />
      
      {/* Exibe o resultado do IMC e a classificação */}
      <Result imc={imc} classificacao={classificacao} />
    </View>
  );
};

// Estilo do container principal, com alinhamento e espaçamento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Alinha os itens no centro horizontalmente
    justifyContent: 'center', // Alinha os itens no centro verticalmente
    padding: 20, // Espaçamento interno
    backgroundColor: '#F5F5F5', // Cor de fundo do container
  },
});

export default App;


