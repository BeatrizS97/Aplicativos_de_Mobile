import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; // Importando os estilos

function Titulo(props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, styles.textCenter]}>
        {props.titulo}
      </Text>

      <Text style={[styles.subtitulo, styles.textCenter]}>
        {props.subtitulo}
      </Text>
    </View>
  );
}

export default Titulo;