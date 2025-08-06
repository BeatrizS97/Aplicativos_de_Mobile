import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 40,
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4, // sombra no Android
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'Poppins',
  },
});

export default styles;
