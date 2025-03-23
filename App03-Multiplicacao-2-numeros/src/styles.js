import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: 'white', // Azul claro sutil no fundo
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },

  card: {
    width: 350,
    height: 270,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgba(30, 144, 255, 0.1)', // Azul translúcido (50% de opacidade)
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#1E90FF', // Azul forte
  },

  texto: {
    fontSize: 18,
    marginTop: 15,
    color: 'blue',
  },
});
