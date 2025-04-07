import React, { useMemo } from 'react'; 
import { Image, StyleSheet, Animated } from 'react-native';
import imagem from '../assets/image.png';

// Componente para exibir uma imagem com animações de fade e escala
const IMCImage = () => {
  // Usa useMemo para garantir que fadeAnim seja criado apenas uma vez, evitando recriação desnecessária
  const fadeAnim = useMemo(() => new Animated.Value(0), []); // Animação de opacidade (fade)
  const scaleAnim = useMemo(() => new Animated.Value(0.8), []); // Animação de escala (tamanho da imagem)

  React.useEffect(() => {
    // Inicia as animações assim que o componente for montado
    Animated.parallel([ // Executa as animações de forma paralela
      Animated.timing(fadeAnim, { // Animação de fade (opacidade)
        toValue: 1, // Valor final de opacidade (totalmente visível)
        duration: 1000, // Duração de 1 segundo para a animação
        useNativeDriver: true, // Habilita o uso do driver nativo para animações mais rápidas
      }),
      Animated.timing(scaleAnim, { // Animação de escala (tamanho)
        toValue: 1, // Valor final da escala (tamanho normal)
        duration: 1000, // Duração de 1 segundo
        useNativeDriver: true, // Habilita o uso do driver nativo para animações mais rápidas
      }),
    ]).start(); // Inicia as animações simultaneamente
  }, [fadeAnim, scaleAnim]); // Só executa quando fadeAnim ou scaleAnim mudarem

  return (
    // Animated.View é usado para permitir animações nas propriedades de estilo
    <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
      {/* Exibe a imagem com os estilos aplicados */}
      <Image
        source={imagem} 
        style={styles.image}
      />
    </Animated.View>
  );
};

// Estilos para o contêiner e a imagem
const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Centraliza a imagem horizontalmente
    justifyContent: 'center', // Centraliza a imagem verticalmente
    marginBottom: 20, // Adiciona espaço abaixo da imagem
  },
  image: {
    width: 300, // Define a largura da imagem
    height: 200, // Define a altura da imagem
    resizeMode: 'cover', // Ajusta a imagem para caber no espaço sem distorcer
    borderRadius: 20, // Bordas arredondadas na imagem
    borderWidth: 4, // Define a espessura da borda da imagem
    borderColor: '#ddd', // Cor da borda (cinza claro)
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 10 }, // Deslocamento da sombra para baixo
    shadowOpacity: 0.2, // Opacidade da sombra (translúcida)
    shadowRadius: 15, // Difusão da sombra
    elevation: 10, // Elevação para Android (sombra mais pronunciada)
  },
});

export default IMCImage; 

