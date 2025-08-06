import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? height * 0.12 : 60,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  scrollView: {
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  enhancedTitulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    textAlign: 'center',
    fontFamily: 'Poppins',
    backgroundColor: 'transparent', // Remover fundo sólido para alinhar com o gradiente
  },
  enhancedSubtitulo: {
    fontSize: 28,
    marginBottom: 10,
    marginTop: 5,
    color: '#00695c',
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 8, // Reduzido para compactar
    paddingHorizontal: 15, // Reduzido para compactar
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    fontFamily: 'Poppins',
  },
  label: {
    fontSize: 18,
    marginBottom: 10, // Reduzido para compactar
    fontWeight: '500',
    marginTop: 10, // Reduzido para compactar
    color: '#00695c',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    fontFamily: 'Poppins',
  },
  dropdownContainer: {
    width: width * 0.58, // Reduzido de 0.85 para um tamanho mais compacto
    marginBottom: 10, // Reduzido para compactar
    zIndex: 1000,
    alignItems: 'center',
    textAlign: 'center',
  },
  sliderContainer: {
    marginTop: 10, // Reduzido para compactar
    alignItems: 'center',
    width: width * 0.75, // Reduzido para corresponder ao dropdownContainer
    justifyContent: 'center',
    textAlign: 'center',
  },
  resultado: {
    marginTop: 10, // Reduzido para compactar
    fontSize: 18,
    color: '#00695c',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10, // Reduzido para compactar
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#00695c',
    fontFamily: 'Poppins',
  },
  section: {
    width: width * 0.80, // Reduzido de 0.92 para um tamanho mais compacto
    marginVertical: 8, // Reduzido para compactar
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#00695c',
  },
  salvarButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10, // Reduzido para compactar
    paddingHorizontal: 20, // Reduzido para compactar
    borderRadius: 12,
    marginTop: 8, // Reduzido para compactar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#00695c',
  },
  salvarButtonGradient: {
    borderRadius: 12,
    padding: 1,
  },
  salvarButtonText: {
    color: '#00695c',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
});

export default styles;