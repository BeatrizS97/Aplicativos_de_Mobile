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

const initialProteinas = [
  { id: 1, nome: 'Acém', porcao: '70g' },
  { id: 2, nome: 'Atum cozido', porcao: '110g' },
  { id: 3, nome: 'Atum cru', porcao: '100g' },
  { id: 4, nome: 'Camarão e outros frutos do mar', porcao: '160g' },
  { id: 5, nome: 'Clara de ovo', porcao: '9 unidades' },
  { id: 6, nome: 'Creme de ricota light', porcao: '100g' },
  { id: 7, nome: 'Coalhada desnatada', porcao: '250g' },
  { id: 8, nome: 'Coxão duro', porcao: '70g' },
  { id: 9, nome: 'Coração de galinha', porcao: '90g' },
  { id: 10, nome: 'Cupim', porcao: '70g' },
  { id: 11, nome: 'Fraldinha', porcao: '60g' },
  { id: 12, nome: 'Frango coxa e sobrecoxa desossada', porcao: '60g' },
  { id: 13, nome: 'Frango peito', porcao: '100g' },
  { id: 14, nome: 'Fígado', porcao: '75g' },
  { id: 15, nome: 'Filé mignon', porcao: '70g' },
  { id: 16, nome: 'Iogurte desnatado de 2 ingredientes', porcao: '250g' },
  { id: 17, nome: 'Kefir desnatado', porcao: '430g' },
  { id: 18, nome: 'Músculo bovino', porcao: '80g' },
  { id: 19, nome: 'Patinho', porcao: '70g' },
  { id: 20, nome: 'Peixe branco', porcao: '140g' },
  { id: 21, nome: 'Peru', porcao: '100g' },
  { id: 22, nome: 'Picanha', porcao: '70g' },
  { id: 23, nome: 'Whey e similares', porcao: '40g' },
  { id: 24, nome: 'Queijo cottage', porcao: '150g' },
  { id: 25, nome: 'Salmão', porcao: '60g' },
  { id: 26, nome: 'Suíno lombo', porcao: '70g' },
  { id: 27, nome: 'Suíno filé mignon', porcao: '100g' },
  { id: 28, nome: 'Tofu', porcao: '200g' },
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

const parsePorcao = (porcao) => parseFloat(porcao.replace(/g|unidades/, '')) || 0;

const Proteinas = () => {
  const [proteinaSelecionada, setProteinaSelecionada] = useState(null);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [refeicaoSelecionada, setRefeicaoSelecionada] = useState(null);
  const [openProteina, setOpenProteina] = useState(false);
  const [openRefeicao, setOpenRefeicao] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedProteina = await getData('proteinaSelecionada');
        const savedPorcao = await getData('porcaoProteina');
        const savedRefeicoes = (await getData('historicoRefeicoes')) || [];
        if (savedProteina !== null) setProteinaSelecionada(parseInt(savedProteina));
        if (savedPorcao !== null) setPorcaoPersonalizada(parseFloat(savedPorcao));
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
    loadData();
  }, []);

  const calcularQuantidade = async () => {
    try {
      if (!proteinaSelecionada) {
        Alert.alert('Erro', 'Por favor, selecione uma proteína.');
        return;
      }
      const porcaoPadrao = parsePorcao(initialProteinas[proteinaSelecionada - 1]?.porcao);
      const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
      setResultado(quantidadeCalculada);

      const novoItem = {
        id: Date.now(),
        nome: initialProteinas[proteinaSelecionada - 1].nome,
        quantidade: quantidadeCalculada,
        data: new Date().toLocaleDateString(), // Padroniza para data
      };
      const historico = (await getData('historicoRefeicoes')) || [];
      const novoHistorico = [...historico, novoItem];
      await saveData('proteinaSelecionada', proteinaSelecionada.toString());
      await saveData('porcaoProteina', porcaoPersonalizada.toString());
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
        tipo: 'Proteína',
        nome: initialProteinas[proteinaSelecionada - 1]?.nome || 'Item não especificado',
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
        <Text style={styles.enhancedTitulo}>Proteínas</Text>
        <Text style={styles.enhancedSubtitulo}>Calculadora de Porções</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Selecione a Proteína:</Text>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={openProteina}
              value={proteinaSelecionada}
              items={initialProteinas.map((item) => ({ label: item.nome, value: item.id }))}
              setOpen={setOpenProteina}
              setValue={setProteinaSelecionada}
              placeholder="Selecione uma proteína"
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

export default Proteinas;