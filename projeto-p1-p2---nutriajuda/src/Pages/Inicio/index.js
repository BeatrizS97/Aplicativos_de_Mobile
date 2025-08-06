import React, { useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

// 👉 Lista com informações das nutricionistas que vão aparecer no app
const nutricionistas = [
  {
    nome: 'Dra. Beatriz Silva',
    descricao: 'Especialista em nutrição funcional e esportiva.',
    imagem: require('../../../assets/beatriz.jpg'),
  },
  {
    nome: 'Dra. Tatiana Nunes',
    descricao: 'Atua com reeducação alimentar há mais de 10 anos.',
    imagem: require('../../../assets/tatiana.jpg'),
  },
];

const Inicio = () => {
  // 👉 useRef usado pra criar uma referência de animação (inicia em 0 = invisível)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // 👉 useEffect com animação de fade (aparecer suavemente) quando o componente carrega
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // valor final da opacidade (totalmente visível)
      duration: 1000, // tempo da animação: 1 segundo
      useNativeDriver: true, // otimiza o desempenho da animação
    }).start(); // inicia a animação
  }, [fadeAnim]);

  return (
    <LinearGradient
      colors={['#e0f7fa', '#ffffff']} // 👉 Gradiente azul claro pro branco no fundo da tela
      style={styles.container}
    >
      <ScrollView>
        {/* 👉 Título principal da tela inicial */}
        <Text style={styles.title}>Bem-vindo ao NutriAjuda</Text>

        {/* 👉 Subtítulo explicando o objetivo do app */}
        <Text style={styles.subTitle}>
          Seu assistente inteligente de nutrição para te ajudar a conquistar saúde, equilíbrio e bem-estar de forma prática e personalizada.
        </Text>

        {/* 👉 Caixa de informação com ícone e texto */}
        <View style={styles.infoBox}>
          <MaterialIcons name="restaurant-menu" size={24} color="#00bfa5" />
          <Text style={styles.infoText}>Planos Alimentares Personalizados</Text>
        </View>

        <View style={styles.infoBox}>
          <MaterialIcons name="local-drink" size={24} color="#00bfa5" />
          <Text style={styles.infoText}>Controle de Hidratação</Text>
        </View>

        <View style={styles.infoBox}>
          <MaterialIcons name="fitness-center" size={24} color="#00bfa5" />
          <Text style={styles.infoText}>Acompanhamento de Objetivos</Text>
        </View>

        {/* 👉 Seção com a lista das nutricionistas */}
        <Text style={styles.sectionTitle}>Nossas Nutricionistas</Text>

        {/* 👉 Mapeando a lista de nutricionistas e mostrando elas com animação de fade */}
        {nutricionistas.map((nutri, index) => (
          <Animated.View key={index} style={[styles.card, { opacity: fadeAnim }]}>
            <Image source={nutri.imagem} style={styles.image} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>{nutri.nome}</Text>
              <Text style={styles.cardDesc}>{nutri.descricao}</Text>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Inicio; // 👉 Exporta o componente pra ser usado em outras partes do app