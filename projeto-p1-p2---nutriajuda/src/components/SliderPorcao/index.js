import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles'; // Importando os estilos

const SliderPorcao = ({ value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Porção Desejada:</Text>
      <Slider
        style={styles.slider}
        minimumValue={0.1}
        maximumValue={2}
        step={0.05}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#00695c"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#00695c"
        // Não especificar useNativeDriver deixa o fallback JS funcionar
      />
      <Text style={styles.valor}>{value.toFixed(2)} porções</Text>
    </View>
  );
};

export default SliderPorcao;