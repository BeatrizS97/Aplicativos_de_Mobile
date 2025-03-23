import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './src/styles'; // Importando os estilos

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularVantagem() {
    if (precoAlcool === '' || precoGasolina === '') {
      Alert.alert('Erro', 'Insira os valores nos dois campos');
      return;
    }

    const divisao = parseFloat(precoAlcool) / parseFloat(precoGasolina);

    if (divisao < 0.7) {
      setMensagem('Abastecer com Álcool é mais vantajoso.');
    } else {
      setMensagem('Abastecer com Gasolina é mais vantajoso.');
    }
  }

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      {/* Imagem */}
      <Image source={require('./assets/image.png')} style={styles.imagem} />

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={setPrecoAlcool}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={setPrecoGasolina}
      />

      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={calcularVantagem}>
        <Text style={styles.botaoTexto}>Verificar</Text>
      </TouchableOpacity>

      {/* Resultado */}
      {mensagem !== '' && <Text style={styles.resultado}>{mensagem}</Text>}
    </View>
  );
}
