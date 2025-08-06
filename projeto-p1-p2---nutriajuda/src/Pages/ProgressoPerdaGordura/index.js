import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getData } from '../../components/Storage/index';
import { LineChart } from 'react-native-chart-kit';
import { Animated } from 'react-native';
import { styles } from './styles.js';

const ProgressoPerdaGordura = () => {
  const [historico, setHistorico] = useState([]);
  const [mensagemProgresso, setMensagemProgresso] = useState('');
  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const loadData = async () => {
      try {
        console.log('Carregando histórico de IMC...');
        const savedHistorico = (await getData('historicoIMC')) || [];
        console.log('Dados carregados:', savedHistorico);
        setHistorico(savedHistorico);

        if (savedHistorico.length > 1) {
          const ultimo = parseFloat(savedHistorico[savedHistorico.length - 1].percentualGordura) || 0;
          const anterior = parseFloat(savedHistorico[savedHistorico.length - 2].percentualGordura) || 0;
          if (ultimo < anterior) {
            const perda = (anterior - ultimo).toFixed(2);
            setMensagemProgresso(`Parabéns! Você reduziu ${perda}% de gordura corporal.`);
          } else if (ultimo > anterior) {
            setMensagemProgresso('Seu percentual de gordura aumentou. Continue se esforçando!');
          } else {
            setMensagemProgresso('Seu percentual de gordura permaneceu estável.');
          }
        } else {
          setMensagemProgresso('Nenhum progresso registrado ainda.');
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setMensagemProgresso('Erro ao carregar o histórico.');
      }
    };

    loadData();
    const interval = setInterval(loadData, 60000); // Recarrega a cada minuto
    return () => clearInterval(interval);
  }, [fadeAnim]);

  const chartData = {
    labels: historico.map((item) => item.data), // Usa a data diretamente
    datasets: [
      {
        data: historico.map((item) => parseFloat(item.percentualGordura) || 0),
        color: (opacity = 1) => `rgba(0, 105, 92, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#e0f7fa',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 105, 92, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#00695c',
    },
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.titulo}>Progresso de Perda de Gordura</Text>
        </Animated.View>
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
        <Text style={styles.mensagem}>{mensagemProgresso}</Text>
        <Text style={styles.label}>Histórico de Percentual de Gordura:</Text>
        {historico.length > 0 ? (
          historico.map((item) =>
            item && item.id && item.percentualGordura && item.peso && item.data ? (
              <View key={item.id} style={styles.historicoItemContainer}>
                <MaterialCommunityIcons name="chart-line" size={20} color="#00695c" style={styles.icon} />
                <Text style={styles.historicoItem}>
                  Gordura: {item.percentualGordura}% - Peso: {item.peso}kg - {item.data}
                </Text>
              </View>
            ) : null
          )
        ) : (
          <Text style={styles.historicoItem}>Nenhum registro no histórico.</Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default ProgressoPerdaGordura;