import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Formacao(){
  return (
  <View style={styles.container}>
  <Text style={styles.titulo}>🎓 Formação Acadêmica</Text>
    <Text style={styles.texto}>📌 Análise e Desenvolvimento de Sistema</Text>
    <Text style={styles.texto}>📌 Instituição: Fatec Praia Grande</Text>
    <Text style={styles.texto}>📌 Período: 2022-2025</Text>
    </View>
  );    
}
export default Formacao;
