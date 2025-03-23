import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Perfil(){
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Meu Perfil Profissional</Text>
    <Image
    source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQFoNX62slQw6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710373484027?e=1746057600&v=beta&t=WETmp-vafKmIKxKx5mWBhK62eyaAt3TYasTUayPZ78I'}}
    style={styles.imagem}/>

    {/*Informações */}
    <Text style={styles.texto1}>Beatriz Silva Santos</Text>
    <Text style={styles.texto2}>       Formação: Análise e Desenvolvimento de Sistemas</Text>
    <Text style={styles.texto}>Experiência: Desenvolvimento Mobile</Text>
    <Text style={styles.texto}>Projetos: Teck Attack, Formulador de Formulários</Text>
    </View>
  );    
}

export default Perfil;
