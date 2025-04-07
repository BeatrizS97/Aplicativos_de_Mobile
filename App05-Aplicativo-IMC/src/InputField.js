import React from 'react'; 
import { TextInput, StyleSheet, View, Text } from 'react-native';

// Componente de campo de entrada (Input) com ícone à esquerda
const InputField = ({ value, onChangeText, placeholder, icon }) => {
  return (
    // Contêiner que organiza o campo de entrada e o ícone
    <View style={styles.inputContainer}>
      {/* Componente TextInput que permite a entrada de texto */}
      <TextInput
        style={styles.input} // Aplica os estilos para o campo de entrada
        value={value} // O valor atual do campo de entrada
        onChangeText={(text) => onChangeText(text.replace(',', '.'))} // Tansforma qualquer vírgula em ponto ao digitar.
        placeholder={placeholder} // Texto que aparece quando o campo está vazio
        keyboardType="numeric" // Define o tipo de teclado para números (para peso/altura)
      />
      {/* Exibe o ícone ao lado esquerdo do campo de entrada */}
      <Text style={styles.icon}>{icon}</Text>
    </View>
  );
};

// Estilos para o contêiner, campo de entrada e ícone
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', // Organiza os elementos na horizontal
    alignItems: 'center', // Alinha os itens no centro verticalmente
    width: '80%', // Garante que o campo ocupe toda a largura disponível
    marginBottom: 15, // Adiciona um espaço inferior entre os campos
    position: 'relative', // Posiciona o ícone de forma absoluta dentro do contêiner
  },
  icon: {
    position: 'absolute', // Posiciona o ícone dentro do campo de entrada
    left: 15, // Define a posição do ícone no lado esquerdo do campo
    fontSize: 20, // Tamanho do ícone
    color: 'gray', // Cor do ícone (cinza)
    opacity: 0.7, // Translucidez do ícone
    shadowColor: '#000', // Cor da sombra do ícone
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra (cima/baixo)
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 3, // Difusão da sombra
    elevation: 3, // Sombra no Android
  },
  input: {
    flex: 1, // O campo de entrada ocupa o espaço restante disponível
    height: 50, // Define a altura do campo de entrada
    backgroundColor: '#FFF', // Cor de fundo do campo (branco)
    borderRadius: 10, // Bordas arredondadas para o campo de entrada
    paddingLeft: 50, // Espaço à esquerda para acomodar o ícone
    fontSize: 16, // Tamanho da fonte do texto dentro do campo
    elevation: 2, // Sombra para o campo de entrada (Android)
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 6, // Difusão da sombra
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra (cima/baixo)
  },
});

export default InputField;


