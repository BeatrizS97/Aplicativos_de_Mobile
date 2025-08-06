import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { getData, saveData } from '../../components/Storage/index';
import { Animated } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Refeicoes = () => {
  const [historicoRefeicoes, setHistoricoRefeicoes] = useState([]);
  const [totals, setTotals] = useState({ carboidratos: 0, frutas: 0, gorduras: 0, proteinas: 0 });
  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const loadData = async () => {
      try {
        console.log('Carregando histórico de refeições...');
        const allRefeicoes = (await getData('historicoRefeicoes')) || [];
        const today = new Date().toLocaleDateString();
        const dailyRefeicoes = allRefeicoes.filter((item) => item.data === today);
        console.log('Dados carregados:', dailyRefeicoes);
        setHistoricoRefeicoes(dailyRefeicoes);

        const lastSavedDate = await getData('lastSavedDate');
        if (!lastSavedDate || lastSavedDate !== today) {
          await saveData('historicoRefeicoes', dailyRefeicoes);
          await saveData('lastSavedDate', today);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    loadData();
    const interval = setInterval(loadData, 60000);
    return () => clearInterval(interval);
  }, [fadeAnim]);

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const newTotals = {
      carboidratos: historicoRefeicoes
        .filter((item) => item.tipo === 'Carboidrato' && item.data === today)
        .reduce((sum, item) => sum + parseFloat(item.quantidade || 0), 0),
      frutas: historicoRefeicoes
        .filter((item) => item.tipo === 'Fruta' && item.data === today)
        .reduce((sum, item) => sum + parseFloat(item.quantidade || 0), 0),
      gorduras: historicoRefeicoes
        .filter((item) => item.tipo === 'Gordura' && item.data === today)
        .reduce((sum, item) => sum + parseFloat(item.quantidade || 0), 0),
      proteinas: historicoRefeicoes
        .filter((item) => item.tipo === 'Proteína' && item.data === today)
        .reduce((sum, item) => sum + parseFloat(item.quantidade || 0), 0),
    };
    setTotals(newTotals);
    console.log('Totais atualizados:', newTotals);
  }, [historicoRefeicoes]);

  const handleDelete = async (id) => {
    try {
      const updatedRefeicoes = historicoRefeicoes.filter((item) => item.id !== id);
      setHistoricoRefeicoes(updatedRefeicoes);
      await saveData('historicoRefeicoes', updatedRefeicoes);
      console.log('Item excluído, novo histórico:', updatedRefeicoes);
    } catch (error) {
      console.error('Erro ao excluir item:', error);
    }
  };

  const renderItem = (item) => (
    <View key={item.id} style={styles.historicoItemContainer}>
      <MaterialCommunityIcons
        name={
          item.tipo === 'Carboidrato'
            ? 'bread-slice'
            : item.tipo === 'Fruta'
            ? 'apple'
            : item.tipo === 'Gordura'
            ? 'oil'
            : 'fish'
        }
        size={20}
        color="#00695c"
        style={styles.icon}
      />
      <Text style={styles.historicoItem}>
        {item.nome} - {item.quantidade}g - {item.refeicao} - {item.data}
      </Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <MaterialCommunityIcons name="delete" size={20} color="#ff4444" />
      </TouchableOpacity>
    </View>
  );

  const chartData = {
    labels: ['Carb.', 'Frutas', 'Gord.', 'Prot.'],
    datasets: [
      {
        data: [totals.carboidratos, totals.frutas, totals.gorduras, totals.proteinas],
        colors: [(opacity = 1) => `rgba(0, 105, 92, ${opacity})`],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#e0f7fa',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 105, 92, ${opacity})`,
    barPercentage: 0.5,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.titulo}>Registro de Refeições</Text>
        </Animated.View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Café da Manhã</Text>
          {historicoRefeicoes.filter((item) => item.refeicao === 'Café da Manhã').map(renderItem)}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Lanche da Manhã</Text>
          {historicoRefeicoes.filter((item) => item.refeicao === 'Lanche da Manhã').map(renderItem)}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Almoço</Text>
          {historicoRefeicoes.filter((item) => item.refeicao === 'Almoço').map(renderItem)}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Café da Tarde</Text>
          {historicoRefeicoes.filter((item) => item.refeicao === 'Café da Tarde').map(renderItem)}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Lanche da Tarde</Text>
          {historicoRefeicoes.filter((item) => item.refeicao === 'Lanche da Tarde').map(renderItem)}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Jantar</Text>
          {historicoRefeicoes.filter((item) => item.refeicao === 'Jantar').map(renderItem)}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Ceia</Text>
          {historicoRefeicoes.filter((item) => item.refeicao === 'Ceia').map(renderItem)}
        </View>
        <Text style={styles.label}>Resumo Diário</Text>
        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Refeicoes;