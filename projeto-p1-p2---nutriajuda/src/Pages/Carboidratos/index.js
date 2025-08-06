import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
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
import { useFonts } from 'expo-font';

// Lista inicial de itens
const initialItems = [
  { id: 1, nome: 'Achocolatado em pó', porcao: '30g' },
  { id: 2, nome: 'Achocolatado em pó light', porcao: '35g' },
  { id: 3, nome: 'Abóbora crua', porcao: '320g' },
  { id: 4, nome: 'Abóbora cozida', porcao: '260g' },
  { id: 5, nome: 'Arroz integral ou branco cozido', porcao: '100g' },
  { id: 6, nome: 'Arroz integral ou branco cru', porcao: '35g' },
  { id: 7, nome: 'Aveia em flocos', porcao: '35g' },
  { id: 8, nome: 'Aveia em farelo ou farinha', porcao: '50g' },
  { id: 9, nome: 'Batata baroa', porcao: '150g' },
  { id: 10, nome: 'Batata doce crua', porcao: '105g' },
  { id: 11, nome: 'Batata doce cozida', porcao: '160g' },
  { id: 12, nome: 'Batata inglesa cozida ou crua', porcao: '145g' },
  { id: 13, nome: 'Biscoito de arroz', porcao: '30g' },
  { id: 14, nome: 'Biscoito de maizena', porcao: '25g' },
  { id: 15, nome: 'Biscoito de polvilho', porcao: '30g' },
  { id: 16, nome: 'Bolo ou broa', porcao: '50g' },
  { id: 17, nome: 'Caldo de cana', porcao: '160g' },
  { id: 18, nome: 'Chocolate ao leite', porcao: '20g' },
  { id: 19, nome: 'Chocolate branco', porcao: '20g' },
  { id: 20, nome: 'Cuzcuz cru', porcao: '35g' },
  { id: 21, nome: 'Doce de leite', porcao: '35g' },
  { id: 22, nome: 'Ervilha cozida', porcao: '150g' },
  { id: 23, nome: 'Feijão cozido', porcao: '160g' },
  { id: 24, nome: 'Nutella', porcao: '20g' },
  { id: 25, nome: 'Pão', porcao: '50g' },
  { id: 26, nome: 'Pipoca pronta', porcao: '90g' },
  { id: 27, nome: 'Tapioca', porcao: '45g' },
  { id: 28, nome: 'Suco integral sem açúcar', porcao: '260g' },
];

// Opções de refeição
const refeicaoOptions = [
  { label: 'Café da Manhã', value: 'Café da Manhã' },
  { label: 'Lanche da Manhã', value: 'Lanche da Manhã' },
  { label: 'Almoço', value: 'Almoço' },
  { label: 'Café da Tarde', value: 'Café da Tarde' },
  { label: 'Lanche da Tarde', value: 'Lanche da Tarde' },
  { label: 'Jantar', value: 'Jantar' },
  { label: 'Ceia', value: 'Ceia' },
];

const parsePorcao = (porcao) => parseFloat(porcao.replace('g', '')) || 0;

const Carboidratos = () => {
  const [carboidratoSelecionado, setCarboidratoSelecionado] = useState(null);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [refeicaoSelecionada, setRefeicaoSelecionada] = useState(null);
  const [openCarboidrato, setOpenCarboidrato] = useState(false);
  const [openRefeicao, setOpenRefeicao] = useState(false);
  const [historicoRefeicoes, setHistoricoRefeicoes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedCarboidrato = await getData('carboidratoSelecionado');
        const savedPorcao = await getData('porcaoCarboidrato');
        const savedRefeicoes = (await getData('historicoRefeicoes')) || [];
        if (savedCarboidrato !== null) setCarboidratoSelecionado(parseInt(savedCarboidrato));
        if (savedPorcao !== null) setPorcaoPersonalizada(parseFloat(savedPorcao));
        setHistoricoRefeicoes(savedRefeicoes);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
    loadData();
  }, []);

  const calcularQuantidade = async () => {
    try {
      if (!carboidratoSelecionado) {
        Alert.alert('Erro', 'Por favor, selecione um item.');
        return;
      }
      const porcaoPadrao = parsePorcao(initialItems[carboidratoSelecionado - 1]?.porcao);
      const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
      setResultado(quantidadeCalculada);

      const novoItem = {
        id: Date.now(),
        nome: initialItems[carboidratoSelecionado - 1].nome,
        quantidade: quantidadeCalculada,
        data: new Date().toLocaleDateString(), // Padroniza para formato de data
      };
      const historico = (await getData('historicoRefeicoes')) || [];
      const novoHistorico = [...historico, novoItem];
      await saveData('carboidratoSelecionado', carboidratoSelecionado.toString());
      await saveData('porcaoCarboidrato', porcaoPersonalizada.toString());
      await saveData('historicoRefeicoes', novoHistorico);
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
        tipo: 'Carboidrato',
        nome: initialItems[carboidratoSelecionado - 1]?.nome || 'Item não especificado',
        quantidade: resultado,
        refeicao: refeicaoSelecionada,
        data: new Date().toLocaleDateString(), // Padroniza para formato de data
      };
      const historicoRefeicoes = (await getData('historicoRefeicoes')) || [];
      const novoHistorico = [...historicoRefeicoes, novoItem];
      await saveData('historicoRefeicoes', novoHistorico);
      setHistoricoRefeicoes(novoHistorico); // Atualiza o estado local
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
      <ScrollView contentContainerStyle={styles.scrollContent} horizontal={false} style={styles.scrollView}>
        <Text style={styles.enhancedTitulo}>Carboidratos</Text>
        <Text style={styles.enhancedSubtitulo}>Calculadora de Porções</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Selecione o Item:</Text>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={openCarboidrato}
              value={carboidratoSelecionado}
              items={initialItems.map((item) => ({ label: item.nome, value: item.id }))}
              setOpen={setOpenCarboidrato}
              setValue={setCarboidratoSelecionado}
              placeholder="Selecione um item"
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
              onValueChange={setPorcaoPersonalizada}
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
            <LinearGradient colors={['#e0f7fa', '#b2dfdb']} style={styles.salvarButtonGradient}>
              <TouchableOpacity style={styles.salvarButton} onPress={salvarRefeicao} activeOpacity={0.7}>
                <Text style={styles.salvarButtonText}>Salvar Refeição</Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Carboidratos;