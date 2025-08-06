import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform, Alert, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
let Slider = require('@react-native-community/slider').default;
if (!Slider) {
  console.error('Slider não encontrado. Usando fallback.');
  Slider = () => <Text>Slider não disponível</Text>;
}
import Titulo from '../../components/Titulo';
import BotaoCalcular from '../../components/BotaoCalcular';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { saveData, getData } from '../../components/Storage/index';

const initialGorduras = [
  { id: 1, nome: 'Abacate', porcao: '60g' },
  { id: 2, nome: 'Amêndoas', porcao: '15g' },
  { id: 3, nome: 'Amendoim', porcao: '15g' },
  { id: 4, nome: 'Avelã', porcao: '13g' },
  { id: 5, nome: 'Azeite', porcao: '10g' },
  { id: 6, nome: 'Cafés termogênicos', porcao: '20g' },
  { id: 7, nome: 'Castanhas', porcao: '15g' },
  { id: 8, nome: 'Chocolate 60% ou mais', porcao: '15g' },
  { id: 9, nome: 'Coalhada', porcao: '90g' },
  { id: 10, nome: 'Coco', porcao: '25g' },
  { id: 11, nome: 'Creme de leite', porcao: '30g' },
  { id: 12, nome: 'Creme de ricota', porcao: '45g' },
  { id: 13, nome: 'Cream cheese', porcao: '30g' },
  { id: 14, nome: 'Cream cheese light', porcao: '40g' },
  { id: 15, nome: 'Gema do ovo', porcao: '1 unidade' },
  { id: 16, nome: 'Iogurte natural integral', porcao: '140g' },
  { id: 17, nome: 'Leite integral', porcao: '130ml' },
  { id: 18, nome: 'Leite desnatado', porcao: '260ml' },
  { id: 19, nome: 'Leite em pó', porcao: '15g' },
  { id: 20, nome: 'Leite em pó desnatado', porcao: '25g' },
  { id: 21, nome: 'Leite de coco em pó', porcao: '15g' },
  { id: 22, nome: 'Manteiga', porcao: '10g' },
  { id: 23, nome: 'Óleo de coco', porcao: '10g' },
  { id: 24, nome: 'Queijo gorgonzola', porcao: '25g' },
  { id: 25, nome: 'Queijo meia cura', porcao: '25g' },
  { id: 26, nome: 'Queijo minas frescal', porcao: '35g' },
  { id: 27, nome: 'Queijo minas padrão', porcao: '30g' },
  { id: 28, nome: 'Queijo mussarela', porcao: '30g' },
  { id: 29, nome: 'Queijo parmesão', porcao: '20g' },
  { id: 30, nome: 'Requeijão', porcao: '35g' },
  { id: 31, nome: 'Requeijão light', porcao: '50g' },
  { id: 32, nome: 'Sementes', porcao: '15g' },
  { id: 33, nome: 'Tahine', porcao: '10g' },
];

const refeicaoOptions = [
  { label: 'Café da Manhã', value: 'Café da Manhã' },
  { label: 'Lanche da Manhã', value: 'Lanche da Manhã' },
  { label: 'Almoço', value: 'Almoço' },
  { label: 'Café da Tarde', value: 'Café da Tarde' },
  { label: 'Lanche da Tarde', value: 'Lanche da Tarde' },
  { label: 'Jantar', value: 'Jantar' },
  { label: 'Ceia', value: 'Ceia' },
];

const parsePorcao = (porcao) => parseFloat(porcao.replace(/g|ml|unidade/, '')) || 0;

const Gorduras = () => {
  const [gorduraSelecionada, setGorduraSelecionada] = useState(null);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [refeicaoSelecionada, setRefeicaoSelecionada] = useState(null);
  const [openGordura, setOpenGordura] = useState(false);
  const [openRefeicao, setOpenRefeicao] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedGordura = await getData('gorduraSelecionada');
        const savedPorcao = await getData('porcaoGordura');
        const savedRefeicoes = (await getData('historicoRefeicoes')) || [];
        if (savedGordura !== null) setGorduraSelecionada(parseInt(savedGordura));
        if (savedPorcao !== null) setPorcaoPersonalizada(parseFloat(savedPorcao));
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
    loadData();
  }, []);

  const calcularQuantidade = async () => {
    try {
      if (!gorduraSelecionada) {
        Alert.alert('Erro', 'Por favor, selecione uma gordura.');
        return;
      }
      const porcaoPadrao = parsePorcao(initialGorduras[gorduraSelecionada - 1]?.porcao);
      const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
      setResultado(quantidadeCalculada);

      const novoItem = {
        id: Date.now(),
        nome: initialGorduras[gorduraSelecionada - 1].nome,
        quantidade: quantidadeCalculada,
        data: new Date().toLocaleDateString(), // Padroniza para data
      };
      const historico = (await getData('historicoRefeicoes')) || [];
      const novoHistorico = [...historico, novoItem];
      await saveData('gorduraSelecionada', gorduraSelecionada.toString());
      await saveData('porcaoGordura', porcaoPersonalizada.toString());
      await saveData('historicoRefeicoes', novoHistorico); // Usa historicoRefeicoes
      console.log('Dados salvos:', novoHistorico);
    } catch (error) {
      console.error('Erro ao calcular quantidade:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados.');
    }
  };

  const salvarRefeicao = async () => {
    try {
      if (!refeicaoSelecionada) {
        Alert.alert('Erro', 'Por favor, selecione uma refeição.');
        return;
      }
      if (!resultado) {
        Alert.alert('Erro', 'Calcule a quantidade antes de salvar a refeição.');
        return;
      }
      const novoItem = {
        id: Date.now(),
        tipo: 'Gordura',
        nome: initialGorduras[gorduraSelecionada - 1]?.nome || 'Item não especificado',
        quantidade: resultado,
        refeicao: refeicaoSelecionada,
        data: new Date().toLocaleDateString(), // Padroniza para data
      };
      const historicoRefeicoes = (await getData('historicoRefeicoes')) || [];
      const novoHistorico = [...historicoRefeicoes, novoItem];
      await saveData('historicoRefeicoes', novoHistorico);
      console.log('Refeição salva:', novoHistorico);
      Alert.alert('Sucesso', `Refeição ${refeicaoSelecionada} salva com sucesso!`);
      setRefeicaoSelecionada(null);
    } catch (error) {
      console.error('Erro ao salvar refeição:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar a refeição.');
    }
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        horizontal={false}
        style={styles.scrollView}
      >
        <Text style={styles.enhancedTitulo}>Gorduras</Text>
        <Text style={styles.enhancedSubtitulo}>Calculadora de Porções</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Selecione a Gordura:</Text>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={openGordura}
              value={gorduraSelecionada}
              items={initialGorduras.map((item) => ({ label: item.nome, value: item.id }))}
              setOpen={setOpenGordura}
              setValue={setGorduraSelecionada}
              placeholder="Selecione uma gordura"
              style={{ backgroundColor: '#fafafa', borderColor: '#00695c', borderWidth: 1.5, borderRadius: 15 }}
              textStyle={{ fontFamily: 'Poppins', color: '#00695c', fontSize: 16 }}
              dropDownStyle={{ backgroundColor: '#fafafa', borderColor: '#00695c' }}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0.5}
              maximumValue={5}
              step={0.5}
              value={porcaoPersonalizada}
              onValueChange={(value) => setPorcaoPersonalizada(value)}
              minimumTrackTintColor="#00695c"
              maximumTrackTintColor="#e0f7fa"
            />
            <Text style={styles.label}>Porção: {porcaoPersonalizada.toFixed(1)}x</Text>
            <BotaoCalcular onPress={calcularQuantidade} />
          </View>
          {resultado && <Text style={styles.resultado}>Quantidade: {resultado} g</Text>}
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Selecione a Refeição:</Text>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={openRefeicao}
              value={refeicaoSelecionada}
              items={refeicaoOptions}
              setOpen={setOpenRefeicao}
              setValue={setRefeicaoSelecionada}
              placeholder="Selecione uma refeição"
              style={{ backgroundColor: '#fafafa', borderColor: '#00695c', borderWidth: 1.5, borderRadius: 15 }}
              textStyle={{ fontFamily: 'Poppins', color: '#00695c', fontSize: 16 }}
              dropDownStyle={{ backgroundColor: '#fafafa', borderColor: '#00695c' }}
            />
          </View>
          {refeicaoSelecionada && resultado && (
            <LinearGradient
              colors={['#e0f7fa', '#b2dfdb']}
              style={styles.salvarButtonGradient}
            >
              <TouchableOpacity
                style={styles.salvarButton}
                onPress={salvarRefeicao}
                activeOpacity={0.7}
              >
                <Text style={styles.salvarButtonText}>Salvar Refeição</Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Gorduras;