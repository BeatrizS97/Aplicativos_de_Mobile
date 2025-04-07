import React, { useRef, useEffect } from 'react';
import { View, Image, Animated } from 'react-native';
import { styles } from './styles';
import imagem from '../assets/image.png';

export default function ImagemDecorativa() {
  // Cria uma referência para o valor animado
  const animacaoImagem = useRef(new Animated.Value(0)).current;

  // Efeito para iniciar a animação quando o componente for montado
  useEffect(() => {
    // Define a animação: aumenta o valor de 0 para 1 em 800ms com um delay de 300ms
    Animated.timing(animacaoImagem, {
      toValue: 1,
      duration: 800,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }, [animacaoImagem]);

  return (
    <View style={styles.imageContainer}>
      {/* Aplica a animação na imagem */}
      <Animated.Image
        source={imagem}
        style={[
          styles.image,
          {
            opacity: animacaoImagem, // Animação de opacidade
            transform: [
              {
                scale: animacaoImagem.interpolate({
                  inputRange: [0, 1], // Intervalo de entrada (valor animado)
                  outputRange: [0.9, 1], // Intervalo de saída (escala da imagem)
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
}