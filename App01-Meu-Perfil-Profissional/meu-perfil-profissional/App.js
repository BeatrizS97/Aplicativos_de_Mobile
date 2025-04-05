import { View, ScrollView } from 'react-native';

// Importação dos componentes personalizados que representam as seções do currículo.
import Perfil from './src/perfil'; // Componente que exibe informações pessoais.
import Formacao from './src/formacao'; // Componente que exibe informações sobre formação acadêmica.
import Experiencia from './src/experiencia'; // Componente que exibe experiências profissionais.
import Projetos from './src/projetos'; // Componente que lista os principais projetos realizados.

// Declaração do componente principal da aplicação.
const App = () => {
  return (

// ScrollView é utilizado para garantir que o usuário possa rolar a tela caso o conteúdo seja extenso.
  <ScrollView>

{/* Componente Perfil: Exibe informações pessoais como nome, formação, experiência e foto. */}
  <Perfil
      nome="Beatriz Silva Santos" // Nome completo da pessoa.
      formacao="Análise e Desenvolvimento de Sistemas" // Curso atual ou concluído.
      experiencia="Desenvolvimento Mobile" // Área de atuação ou especialização.
      projetos="Teck Attack, Formulador de Formulários" // Projetos destacados.
      foto="https://media.licdn.com/dms/image/v2/D5603AQFoNX62slQw6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710373484027?e=1746057600&v=beta&t=WETmp-vafKmIKxKx5mWBhK62eyaAt3TYasTUayPZ78I" // URL da foto de perfil.
/>

{/* Componente Formacao: Exibe informações sobre a formação acadêmica. */}
  <Formacao
      curso="Análise e Desenvolvimento de Sistemas" // Nome do curso.
      instituicao="Fatec Praia Grande" // Instituição onde o curso foi realizado.
      periodo="2022-2025" // Período de duração do curso.
/>

{/* Componente Experiencia: Exibe informações sobre experiências profissionais. */}
  <Experiencia 
      cargo="Estagiária em Desenvolvimento Mobile" // Cargo ocupado.
      empresa="Fonte do Desejo" // Empresa onde trabalhou/trabalha.
      tecnologias="HTML, CSS, JavaScript, React" // Tecnologias utilizadas no trabalho.
  />

{/* Componente Projetos: Lista os principais projetos desenvolvidos. */}
  <Projetos projetos={[
      "Sistema Web para Laudos de ECG - Teck Attack", // Projeto 1: Descrição resumida.
      "Site Formulador de Formulários", // Projeto 2: Descrição resumida.
]} />
    </ScrollView>
  );
};

// Exportação do componente principal para ser renderizado na aplicação.
export default App;
