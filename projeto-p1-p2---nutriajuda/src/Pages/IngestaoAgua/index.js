import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Image, Alert, TouchableOpacity, Animated, Platform, Switch, Easing, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BotaoCalcular from '../../components/BotaoCalcular';
import { styles } from './styles';
import { saveData, getData } from '../../components/Storage/index';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const IngestaoAgua = () => {
  const [quantidadeAgua, setQuantidadeAgua] = useState('');
  const [totalAgua, setTotalAgua] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [isReminderOn, setIsReminderOn] = useState(false);
  const DAILY_GOAL = 2000; // Daily water goal in ml

  // Animation refs for title and fade-in effect
  const titleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadData = async () => {
      const savedTotalAgua = await getData('totalAgua');
      const savedHistorico = (await getData('historicoAgua')) || [];
      const savedReminder = await getData('waterReminder') || false;
      if (savedTotalAgua !== null) setTotalAgua(parseFloat(savedTotalAgua));
      setHistorico(savedHistorico);
      setIsReminderOn(savedReminder);
      // Trigger fade-in animation for historico
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      // Trigger one-time title animation
      Animated.timing(titleAnim, {
        toValue: 1.1,
        duration: 3000, // Slower animation over 3 seconds
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        // Reset to 1 and stop after animation
        titleAnim.setValue(1);
      });
    };
    loadData();
  }, [fadeAnim, titleAnim]);

  const adicionarAgua = async () => {
    const aguaNum = parseFloat(quantidadeAgua.replace(',', '.'));
    if (!isNaN(aguaNum) && aguaNum > 0) {
      const novoTotal = totalAgua + aguaNum;
      setTotalAgua(novoTotal);

      const novoItem = {
        id: Date.now(),
        quantidade: aguaNum,
        data: new Date().toLocaleString(),
      };
      const novoHistorico = [...historico, novoItem];
      setHistorico(novoHistorico);

      await saveData('totalAgua', novoTotal.toString());
      await saveData('historicoAgua', novoHistorico);
      setQuantidadeAgua('');
    } else {
      alert('Por favor, insira uma quantidade válida de água.');
    }
  };

  const getWaterImage = () => {
    const percentage = (totalAgua / DAILY_GOAL) * 100;
    console.log('Total Agua:', totalAgua, 'Percentage:', percentage);
    try {
      if (percentage >= 100) return require('../../../assets/boneco_100.png');
      else if (percentage >= 75) return require('../../../assets/boneco_75.png');
      else if (percentage >= 50) return require('../../../assets/boneco_50.png');
      else if (percentage >= 25) return require('../../../assets/boneco_25.png');
      else return require('../../../assets/boneco_0.png');
    } catch (error) {
      console.error('Image load error:', error.message);
      Alert.alert('Erro', 'Imagens não encontradas. Verifique os arquivos em src/assets/.');
      return require('../../../assets/boneco_0.png');
    }
  };

  const excluirRegistro = async (id) => {
    const novoHistorico = historico.filter(item => item.id !== id);
    const novoTotal = novoHistorico.reduce((sum, item) => sum + item.quantidade, 0);
    setHistorico(novoHistorico);
    setTotalAgua(novoTotal);

    await saveData('totalAgua', novoTotal.toString());
    await saveData('historicoAgua', novoHistorico);
  };

  const toggleReminder = async (value) => {
    setIsReminderOn(value);
    await saveData('waterReminder', value);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.titulo}>Ingestão de Água</Text>
        </Animated.View>
        <Image source={getWaterImage()} style={[styles.imagem, { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }]} />
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>Meta Diária: {DAILY_GOAL} ml</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="water" size={24} color="#999" style={styles.icon} />
            <TextInput
              placeholder="Quantidade de água (ml)"
              keyboardType="numeric"
              value={quantidadeAgua}
              onChangeText={(text) => setQuantidadeAgua(text)}
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>
          <BotaoCalcular onPress={adicionarAgua} />
        </View>
        <Text style={styles.resultado}>Total Consumido: {totalAgua.toFixed(2)} ml</Text>
        <View style={styles.reminderContainer}>
          <Text style={styles.reminderText}>Lembrete de Água</Text>
          <Switch
            trackColor={{ false: '#ddd', true: '#00695c' }}
            thumbColor={isReminderOn ? '#fff' : '#f5f5f5'}
            ios_backgroundColor="#ddd"
            onValueChange={toggleReminder}
            value={isReminderOn}
          />
        </View>
        <View style={styles.registroContainer}>
          <View style={styles.registroHeader}>
            <MaterialCommunityIcons name="calendar" size={20} color="#00695c" />
            <Text style={styles.registroTitle}>Registro Diário</Text>
          </View>
          {historico.length > 0 ? (
            historico.map((item) => (
              <Animated.View key={item.id} style={[styles.historicoItemContainer, { opacity: fadeAnim }]}>
                <Text style={styles.historicoItem}>{item.quantidade}ml - {item.data}</Text>
                <TouchableOpacity onPress={() => excluirRegistro(item.id)}>
                  <MaterialCommunityIcons name="delete" size={20} color="#ff4444" />
                </TouchableOpacity>
              </Animated.View>
            ))
          ) : (
            <Text style={styles.historicoItem}>Nenhum registro no histórico.</Text>
          )}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default IngestaoAgua;