import { View, Text } from 'react-native';
import { styles } from './styles';

function Projetos(props) {
  return (
  <View style={styles.container}>
  
{/* Título da seção de projetos, com emoji pra dar um visual mais legal */}
  <Text style={styles.titulo}>🚀 Projetos</Text>

{/* Aqui percorro a lista de projetos recebida via props (vem do componente pai) */}
  {props.projetos.map((projeto, index) => (

// Uso uma View com estilo de linha pra alinhar o bullet e o texto na horizontal
  <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 4 }}>

{/* Bullet ocupa espaço fixo, alinhado ao topo do texto */}
  <Text style={styles.bullet}>{'\u2022'}</Text>

{/* O nome do projeto vem da lista e é exibido aqui */}
  <Text style={styles.texto}> {projeto}</Text>
     
      </View>
    ))}
   </View>
  );
}

export default Projetos;

