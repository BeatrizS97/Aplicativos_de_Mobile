import React from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native'; // 
import { styles } from './styles'; // 

// Componente funcional que representa o botão "Verificar"
export default function BotaoVerificar({ aoPressionar, escala }) {
  // O componente recebe duas props:
  // - `aoPressionar`: Função que será executada quando o botão for pressionado.
  // - `escala`: Valor animado que controla a escala (tamanho) do botão.

  return (
    // Animated.View é usado para aplicar animações ao componente.
    // Aqui, estamos aplicando uma transformação de escala (`scale`) ao botão.
    <Animated.View style={{ transform: [{ scale: escala }] }}>
      {/* TouchableOpacity é um componente que torna qualquer elemento clicável.
          Quando pressionado, ele executa a função `aoPressionar`. */}
      <TouchableOpacity style={styles.botao} onPress={aoPressionar}>
        {/* Text exibe o texto do botão. O estilo `botaoTexto` define a aparência do texto. */}
        <Text style={styles.botaoTexto}>Verificar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}