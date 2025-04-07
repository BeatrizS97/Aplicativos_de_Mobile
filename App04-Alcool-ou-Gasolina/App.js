import React, { useState, useRef, useEffect } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, Animated, Image } from 'react-native';

// Importa os estilos globais
// Componentes personalizados criados para modularizar o código
import { styles } from './src/styles'; 
import Titulo from './src/Titulo';
import CampoEntrada from './src/CampoEntrada';
import BotaoVerificar from './src/BotaoVerificar';
import MensagemResultado from './src/MensagemResultado';
import ImagemDecorativa from './src/ImagemDecorativa';

export default function App() {
  // Estados para armazenar os preços do álcool e da gasolina
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [mensagem, setMensagem] = useState(''); // Estado para a mensagem de resultado

  // Estados para controlar se os campos de entrada estão em foco
  const [focadoAlcool, setFocadoAlcool] = useState(false);
  const [focadoGasolina, setFocadoGasolina] = useState(false);

  // Referências para animações (escala do botão e fade da mensagem)
  const escalaAnimada = useRef(new Animated.Value(1)).current; // Escala inicial do botão é 1
  const fadeAnim = useRef(new Animated.Value(0)).current; // Opacidade inicial da mensagem é 0
  const titleAnim = useRef(new Animated.Value(0)).current;

  // Animação para exibir a mensagem de resultado quando ela for atualizada
  useEffect(() => {
    if (mensagem !== '') {
      fadeAnim.setValue(0); // Reseta a opacidade para 0 antes de iniciar a animação
      Animated.timing(fadeAnim, {
        toValue: 1, // Aumenta a opacidade para 1
        duration: 700, // Duração da animação em milissegundos
        useNativeDriver: true, // Usa o driver nativo para melhor desempenho
      }).start(); // Inicia a animação
    }
  }, [mensagem, fadeAnim]); // Executa sempre que a mensagem for alterada

  // Função chamada ao pressionar o botão "Verificar"
  const aoPressionar = () => {
    // Animação do botão ao ser pressionado
    Animated.sequence([
      // Primeiro diminui o tamanho do botão para 95% (efeito de pressionar)
      Animated.timing(escalaAnimada, {
        toValue: 0.95,
        duration: 100, // Duração curta para simular o clique
        useNativeDriver: true,
      }),
      // Depois retorna ao tamanho original com um efeito elástico
      Animated.spring(escalaAnimada, {
        toValue: 1, // Volta ao tamanho normal
        friction: 3, // Define o nível de elasticidade
        useNativeDriver: true,
      }),
    ]).start();

    // Converte os valores digitados para números (substituindo vírgula por ponto)
    const alcool = parseFloat(precoAlcool.replace(',', '.'));
    const gasolina = parseFloat(precoGasolina.replace(',', '.'));

    // Validação dos inputs para garantir que os valores são números válidos
    if (isNaN(alcool) || isNaN(gasolina)) {
      setMensagem('Por favor, insira preços válidos.'); // Exibe mensagem de erro
      return; // Sai da função caso os valores não sejam válidos
    }

    // Calcula a razão entre o preço do álcool e o preço da gasolina
    const resultado = alcool / gasolina;

    // Determina qual combustível é mais vantajoso
    if (resultado < 0.7) {
      setMensagem('Álcool é mais vantajoso!');
    } else {
      setMensagem('Gasolina é mais vantajosa!');
    }

    // Limpa os campos de entrada após o cálculo
    setPrecoAlcool('');
    setPrecoGasolina('');
  };

  return (
    // Permite fechar o teclado ao tocar fora dos campos de entrada
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Componente de título */}
        <Titulo />

        {/* Imagem decorativa no topo */}
        <ImagemDecorativa />

        {/* Campo de entrada para o preço do álcool */}
        <CampoEntrada
          placeholder="Preço do Álcool"
          valor={precoAlcool}
          aoAlterar={setPrecoAlcool}
          emFoco={focadoAlcool}
          aoFocar={() => setFocadoAlcool(true)} // Ativa o estado de foco
          aoSair={() => setFocadoAlcool(false)} // Desativa o estado de foco
        />

        {/* Campo de entrada para o preço da gasolina */}
        <CampoEntrada
          placeholder="Preço da Gasolina"
          valor={precoGasolina}
          aoAlterar={setPrecoGasolina}
          emFoco={focadoGasolina}
          aoFocar={() => setFocadoGasolina(true)}
          aoSair={() => setFocadoGasolina(false)}
        />

        {/* Botão "Verificar" com animação de escala */}
        <BotaoVerificar aoPressionar={aoPressionar} escala={escalaAnimada} />

        {/* Exibe a mensagem de resultado com animação de fade */}
        <MensagemResultado visivel={mensagem !== ''} animacao={fadeAnim} texto={mensagem} />
      </View>
    </TouchableWithoutFeedback>
  );
}