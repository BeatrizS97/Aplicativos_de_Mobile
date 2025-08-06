import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'; // Importando os estilos padrão

const BotaoCalcular = ({
  titulo = 'Calcular', // Prop para o texto do botão (com valor padrão)
  onPress,            // Função a ser executada ao pressionar o botão
  style,              // Estilo personalizado para o container do botão
  botaoStyle,         // Estilo personalizado para o botão
  textStyle,          // Estilo personalizado para o texto
  backgroundColor,    // Cor de fundo personalizada para o botão
  disabled = false,   // Prop para desabilitar o botão
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.botao,
          botaoStyle,
          { backgroundColor: backgroundColor || '#00695c' }, // Cor de fundo customizável
          disabled && { opacity: 0.5 }, // Reduz a opacidade se o botão estiver desabilitado
        ]}
        onPress={onPress}
        disabled={disabled} // Desabilita o botão se necessário
      >
        <Text style={[styles.textoBotao, textStyle]}>
          {titulo} {/* Título personalizável */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoCalcular;