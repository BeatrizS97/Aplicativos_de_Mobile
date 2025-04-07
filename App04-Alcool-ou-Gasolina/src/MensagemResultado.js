import React from 'react';
import { Animated, Text } from 'react-native';
import { styles } from './styles';

export default function MensagemResultado({ visivel, animacao, texto }) {
  if (!visivel) return null;

  return (
    <Animated.View
      style={[
        styles.resultadoContainer,
        {
          opacity: animacao,
          transform: [
            {
              translateY: animacao.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.resultado}>{texto}</Text>
    </Animated.View>
  );
}
