import React, { useRef, useEffect } from 'react';
import { Animated, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

export default function Titulo() {
  const animacaoTitulo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animacaoTitulo, {
      toValue: 1,
      duration: 800,
      delay: 300,
      useNativeDriver: true,
    }).start();
  }, [animacaoTitulo]);

  return (
    <Animated.Text
      style={[
        styles.titulo,
        {
          opacity: animacaoTitulo,
          transform: [
            {
              scale: animacaoTitulo.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
          ],
        },
      ]}
    >
      Álcool ou Gasolina <MaterialCommunityIcons name="fuel" size={30} color="#4CAF50" style={styles.iconePequeno} />
    </Animated.Text>
  );
}
