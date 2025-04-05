import { View, Text } from 'react-native';
import { styles } from './styles';

function Experiencia(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💼 Experiência Profissional</Text>

      <Text style={styles.texto}>
      <Text style={styles.bullet}>{'\u2022'}</Text>
      <Text> {props.cargo}</Text>
      </Text>

    <Text style={styles.texto}>
    <Text style={styles.bullet}>{'\u2022'}</Text> Empresa: {props.empresa}</Text>

     <Text style={styles.texto}>
    <Text style={styles.bullet}>{'\u2022'}</Text> Tecnologias: {props.tecnologias}</Text>
    </View>
  );
}

export default Experiencia;

