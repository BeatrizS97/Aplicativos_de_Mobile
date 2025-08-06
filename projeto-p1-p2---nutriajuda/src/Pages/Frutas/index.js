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

const initialFrutas = [
  { id: 1, nome: 'Abacaxi', porcao: '200g' },
  { id: 2, nome: 'Açaí polpa pura sem açúcar', porcao: '175g' },
  { id: 3, nome: 'Acerola', porcao: '310g' },
  { id: 4, nome: 'Água de coco', porcao: '500ml' },
  { id: 5, nome: 'Ameixa', porcao: '210g' },
  { id: 6, nome: 'Ameixa seca', porcao: '40g' },
  { id: 7, nome: 'Amora', porcao: '230g' },
  { id: 8, nome: 'Atemóia', porcao: '100g' },
  { id: 9, nome: 'Banana da terra', porcao: '80g' },
  { id: 10, nome: 'Banana', porcao: '90g' },
  { id: 11, nome: 'Mirtilo', porcao: '175g' },
  { id: 12, nome: 'Caju', porcao: '230g' },
  { id: 13, nome: 'Caqui', porcao: '80g' },
  { id: 14, nome: 'Carambola', porcao: '320g' },
  { id: 15, nome: 'Cereja', porcao: '200g' },
  { id: 16, nome: 'Ciriguela', porcao: '125g' },
  { id: 17, nome: 'Cupuaçu', porcao: '200g' },
  { id: 18, nome: 'Damasco seco', porcao: '40g' },
  { id: 19, nome: 'Figo', porcao: '135g' },
  { id: 20, nome: 'Framboesa', porcao: '180g' },
  { id: 21, nome: 'Geléia 100% fruta', porcao: '55g' },
  { id: 22, nome: 'Goiaba', porcao: '150g' },
  { id: 23, nome: 'Graviola', porcao: '150g' },
  { id: 24, nome: 'Jabuticaba', porcao: '170g' },
  { id: 25, nome: 'Jaca', porcao: '105g' },
  { id: 26, nome: 'Kiwi', porcao: '160g' },
  { id: 27, nome: 'Laranja', porcao: '210g' },
  { id: 28, nome: 'Lichia', porcao: '140g' },
  { id: 29, nome: 'Maçã', porcao: '190g' },
  { id: 30, nome: 'Mamão', porcao: '230g' },
  { id: 31, nome: 'Manga', porcao: '160g' },
  { id: 32, nome: 'Maracujá', porcao: '140g' },
  { id: 33, nome: 'Melancia', porcao: '330g' },
  { id: 34, nome: 'Melão', porcao: '340g' },
  { id: 35, nome: 'Tangerina', porcao: '200g' },
  { id: 36, nome: 'Morango', porcao: '300g' },
  { id: 37, nome: 'Pera', porcao: '175g' },
  { id: 38, nome: 'Pêssego', porcao: '250g' },
  { id: 39, nome: 'Tamara seca', porcao: '35g' },
  { id: 40, nome: 'Uva', porcao: '180g' },
  { id: 41, nome: 'Uva passas', porcao: '30g' },
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

const parsePorcao = (porcao) => parseFloat(porcao.replace(/g|ml/, '')) || 0;

const Frutas = () => {
  const [frutaSelecionada, setFrutaSelecionada] = useState(null);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [refeicaoSelecionada, setRefeicaoSelecionada] = useState(null);
  const [openFruta, setOpenFruta] = useState(false);
  const [openRefeicao, setOpenRefeicao] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedFruta = await getData('frutaSelecionada');
        const savedPorcao = await getData('porcaoFruta');
        const savedRefeicoes = (await getData('historicoRefeicoes')) || [];
        if (savedFruta !== null) setFrutaSelecionada(parseInt(savedFruta));
        if (savedPorcao !== null) setPorcaoPersonalizada(parseFloat(savedPorcao));
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
    loadData();
  }, []);

  const calcularQuantidade = async () => {
    try {
      if (!frutaSelecionada) {
        Alert.alert('Erro', 'Por favor, selecione uma fruta.');
        return;
      }
      const porcaoPadrao = parsePorcao(initialFrutas[frutaSelecionada - 1]?.porcao);
      const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
      setResultado(quantidadeCalculada);

      const novoItem = {
        id: Date.now(),
        nome: initialFrutas[frutaSelecionada - 1].nome,
        quantidade: quantidadeCalculada,
        data: new Date().toLocaleDateString(), // Padroniza para data
      };
      const historico = (await getData('historicoRefeicoes')) || [];
      const novoHistorico = [...historico, novoItem];
      await saveData('frutaSelecionada', frutaSelecionada.toString());
      await saveData('porcaoFruta', porcaoPersonalizada.toString());
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
        tipo: 'Fruta',
        nome: initialFrutas[frutaSelecionada - 1]?.nome || 'Item não especificado',
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
      <ScrollView contentContainerStyle={styles.scrollContent} horizontal={false} style={styles.scrollView}>
        <Text style={styles.enhancedTitulo}>Frutas</Text>
        <Text style={styles.enhancedSubtitulo}>Calculadora de Porções</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Selecione a Fruta:</Text>
          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={openFruta}
              value={frutaSelecionada}
              items={initialFrutas.map((item) => ({ label: item.nome, value: item.id }))}
              setOpen={setOpenFruta}
              setValue={setFrutaSelecionada}
              placeholder="Selecione uma fruta"
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

export default Frutas;