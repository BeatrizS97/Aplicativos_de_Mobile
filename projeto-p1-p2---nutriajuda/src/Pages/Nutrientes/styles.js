import { StyleSheet, Dimensions } from 'react-native';

// Pega a largura da tela do dispositivo
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0, // Remove padding para evitar conflitos
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 25,
    marginTop: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
    backgroundColor: 'rgba(224, 247, 250, 0.3)',
    paddingVertical: 20,
    borderRadius: 15,
    fontFamily: 'Poppins',
  },
  page: {
    width: screenWidth,
    minHeight: 600,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Remove fundo para usar LinearGradient
  },
});

export default styles;