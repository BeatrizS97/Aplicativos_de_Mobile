import { View, Text } from 'react-native';
import { styles } from './styles';

function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🚀 Projetos</Text>
      <Text style={styles.texto}>📌 Sistema Web para Laudos de ECG - Teck Attack </Text>
      <Text style={styles.texto}>📌 Site Formulador de Formuloários</Text>
    </View>
  );
}

export default Projetos;
