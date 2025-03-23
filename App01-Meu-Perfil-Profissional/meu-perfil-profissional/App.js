import { View, ScrollView } from 'react-native';

import Perfil from './src/perfil';
import Formacao from './src/formacao';
import Experiencia from './src/experiencia';
import Projetos from './src/projetos';

const App = () => {
  return (
    <ScrollView>
      <Perfil />
      <Formacao />
      <Experiencia />
      <Projetos />
    </ScrollView>
  );
};

export default App;
