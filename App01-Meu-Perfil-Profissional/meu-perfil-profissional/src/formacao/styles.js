import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 2,
  },
  bullet: {
      fontSize: 29, // bullet maior
      lineHeight: 20, // menor que fontSize para reduzir altura extra
      color: '#000',
      textAlignVertical: 'center', // ajuda no alinhamento (funciona melhor no Android)
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#black',
    marginBottom: 10,
  },
  texto: {
    marginLeft: 25,
    fontSize: 16,
    marginBottom: 5,
  },
});

