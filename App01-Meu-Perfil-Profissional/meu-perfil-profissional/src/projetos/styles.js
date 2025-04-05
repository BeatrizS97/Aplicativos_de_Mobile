import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 5,
  },
    bullet: {
      marginLeft: 25,
      fontSize: 29, // bullet maior
      lineHeight: 20, // menor que fontSize para reduzir altura extra
      color: '#000',
      textAlignVertical: 'center', // ajuda no alinhamento (funciona melhor no Android)
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#264653',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
});

