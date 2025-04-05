import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Formacao(props){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎓 Formação Acadêmica</Text>

     <Text style={styles.texto}>
  <Text style={styles.bullet}>{'\u2022'}</Text>
  <Text> {props.curso}</Text>
</Text>

      <Text style={styles.texto}>
        <Text style={styles.bullet}>{'\u2022'}</Text> Instituição: {props.instituicao}
      </Text>

      <Text style={styles.texto}>
        <Text style={styles.bullet}>{'\u2022'}</Text> Período: {props.periodo}
      </Text>
    </View>
  );
}

export default Formacao;
