import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Perfil(props){
  return (
// View é usado como um container para agrupar outros elementos visuais.
    <View style={styles.container}>
    
{/* Título da seção Perfil */}
  <Text style={styles.titulo}>Meu Perfil Profissional</Text>

{/* Imagem de perfil */}
  <Image
      source={{ uri: props.foto }}
      style={styles.imagem}
    />

{/*Informações do Perfil */}
  <Text style={styles.texto1}>{props.nome}</Text>
    </View>
  );    
}

export default Perfil;
