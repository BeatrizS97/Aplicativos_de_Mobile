import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Animated, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import BotaoCalcular from '../../components/BotaoCalcular';
import { saveData, getData } from '../../components/Storage/index';
import { useFonts } from 'expo-font';

// Função para calcular o percentual de gordura (Fórmula de Boer)
const calcularPercentualGordura = (imc, idade, genero) => {
  if (!imc || !idade || !genero) return null;
  const generoValor = genero === 'masculino' ? 1 : 0;
  const percentual = (1.20 * imc) + (0.23 * idade) - (10.8 * generoValor) - 5.4;
  return Math.max(0, percentual.toFixed(2));
};

const IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('masculino');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [percentualGordura, setPercentualGordura] = useState(null);
  const [open, setOpen] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const [items, setItems] = useState([
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
  ]);

  useEffect(() => {
    const loadData = async () => {
      const savedPeso = await getData('peso');
      const savedAltura = await getData('altura');
      const savedIdade = await getData('idade');
      const savedGenero = await getData('genero');
      const savedIMC = await getData('imc');
      const savedClassificacao = await getData('classificacao');
      const savedPercentualGordura = await getData('percentualGordura');

      if (savedPeso !== null) setPeso(savedPeso);
      if (savedAltura !== null) setAltura(savedAltura);
      if (savedIdade !== null) setIdade(savedIdade);
      if (savedGenero !== null) setGenero(savedGenero);
      if (savedIMC !== null) setIMC(savedIMC);
      if (savedClassificacao !== null) setClassificacao(savedClassificacao);
      if (savedPercentualGordura !== null) setPercentualGordura(savedPercentualGordura);
    };
    loadData();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const calcularIMC = async () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    const idadeNum = parseFloat(idade);

    if (!isNaN(pesoNum) && !isNaN(alturaNum) && !isNaN(idadeNum) && genero) {
      const alturaMetros = alturaNum > 3 ? alturaNum / 100 : alturaNum;
      const imcCalculado = pesoNum / (alturaMetros * alturaMetros);
      const imcFormatado = imcCalculado.toFixed(2);
      setIMC(imcFormatado);
      definirClassificacao(imcCalculado);

      const percentual = calcularPercentualGordura(imcCalculado, idadeNum, genero);
      setPercentualGordura(percentual);

      const historico = await getData('historicoIMC') || [];
      const ultimoPercentual = historico.length > 0 ? parseFloat(historico[historico.length - 1]?.percentualGordura) : null;
      if (ultimoPercentual !== null) {
        if (percentual < ultimoPercentual) {
          Alert.alert('Parabéns!', `Você perdeu ${(ultimoPercentual - percentual).toFixed(2)}% de gordura! Continue assim!`);
        } else if (percentual > ultimoPercentual) {
          Alert.alert('Atenção!', 'Seu percentual de gordura aumentou. Continue se esforçando!');
        }
      }

      const novoItem = {
        id: Date.now(),
        peso: pesoNum,
        imc: imcFormatado,
        percentualGordura: percentual,
        data: new Date().toLocaleDateString(), // Padroniza para data apenas
      };
      const novoHistorico = [...historico, novoItem];

      await saveData('peso', peso);
      await saveData('altura', altura);
      await saveData('idade', idade);
      await saveData('genero', genero);
      await saveData('imc', imcFormatado);
      await saveData('classificacao', classificacao);
      await saveData('percentualGordura', percentual);
      await saveData('historicoIMC', novoHistorico);
      console.log('Historico salvo:', novoHistorico); // Log para depuração
    } else {
      Alert.alert('Erro', 'Por favor, insira valores válidos para peso, altura, idade e gênero.');
    }
  };

  const definirClassificacao = (imc) => {
    let novaClassificacao = '';
    if (imc < 18.5) novaClassificacao = 'Abaixo do Peso';
    else if (imc >= 18.5 && imc <= 24.9) novaClassificacao = 'Peso Normal';
    else if (imc >= 25 && imc <= 29.9) novaClassificacao = 'Sobrepeso';
    else if (imc >= 30 && imc <= 34.9) novaClassificacao = 'Obesidade Grau I';
    else if (imc >= 35 && imc <= 39.9) novaClassificacao = 'Obesidade Grau II';
    else novaClassificacao = 'Obesidade Grau III ou Mórbida';
    setClassificacao(novaClassificacao);
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={[styles.titulo, { textAlign: 'center' }]}>Calculadora de Saúde</Text>
        </Animated.View>
        <Image source={require('../../../assets/obesidade.png')} style={styles.imagem} />
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="scale-balance" size={24} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Peso (kg)"
            keyboardType="decimal-pad"
            value={peso}
            onChangeText={(text) => setPeso(text)}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="ruler" size={24} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Altura (m ou cm)"
            keyboardType="decimal-pad"
            value={altura}
            onChangeText={(text) => setAltura(text)}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="calendar" size={24} color="#999" style={styles.icon} />
          <TextInput
            placeholder="Idade"
            keyboardType="numeric"
            value={idade}
            onChangeText={(text) => setIdade(text)}
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>
        <View style={[styles.inputContainer, { zIndex: 2000 }]}>
          <MaterialCommunityIcons name="gender-male-female" size={24} color="#999" style={styles.icon} />
          <DropDownPicker
            open={open}
            value={genero}
            items={items}
            setOpen={setOpen}
            setValue={setGenero}
            setItems={setItems}
            placeholder="Selecione o gênero"
            style={[styles.input, { width: '85%' }]}
            containerStyle={{ width: '85%', zIndex: 2000 }}
            dropDownContainerStyle={[styles.dropDownContainer, { zIndex: 2000 }]}
            zIndex={2000}
            dropDownDirection="BOTTOM"
            listMode="SCROLLVIEW"
          />
        </View>
        <BotaoCalcular onPress={calcularIMC} style={{ zIndex: 1000 }} />
        {imc && (
          <LinearGradient colors={['#e0f7fa', '#ffffff']} style={[styles.resultadoContainer, { padding: 25 }]}>
            <Text style={[styles.resultadoTitulo, { fontSize: 20, textAlign: 'center' }]}>Seu Resultado</Text>
            <Text style={[styles.resultadoValor, { fontSize: 28, textAlign: 'center' }]}>{imc}</Text>
            <Text style={[styles.classificacao, { fontSize: 18, textAlign: 'center', marginVertical: 5 }]}>Classificação: {classificacao}</Text>
            {percentualGordura && (
              <Text style={[styles.classificacao, { fontSize: 18, textAlign: 'center', marginVertical: 5 }]}>Percentual de Gordura: {percentualGordura}%</Text>
            )}
          </LinearGradient>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default IMC;