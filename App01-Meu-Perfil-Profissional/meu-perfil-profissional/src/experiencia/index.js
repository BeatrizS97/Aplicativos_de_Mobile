import { View, Text } from 'react-native';
import { styles } from './styles';

function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💼 Experiência Profissional</Text>
      <Text style={styles.texto}>📌 Estagiária em Desenvolvimento Mobile</Text>
      <Text style={styles.texto}>📌 Empresa: Fonte do Desejo</Text>
      <Text style={styles.texto}>📌 Tecnologias: HTML, CSS, JavaScript, React</Text>
    </View>
  );
}

export default Experiencia;
