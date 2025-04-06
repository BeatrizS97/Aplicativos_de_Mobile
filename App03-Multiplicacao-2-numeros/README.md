# Multiplicador de Números - React Native

Este é um projeto simples de aplicativo desenvolvido com **React Native**, que permite multiplicar dois números de maneira prática e interativa. O objetivo deste projeto é praticar conceitos de componentização, estilização, uso de props e aplicar melhorias visuais com animações para uma experiência mais agradável ao usuário.

---

📋 Índice

1. [Visão Geral](#visão-geral)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Como Executar o Projeto](#como-executar-o-projeto)
6. [Contribuições](#contribuições)
7. [Licença](#licença)


---

🌟 **Visão Geral**

O **Multiplicador de Números** é uma aplicação móvel interativa que permite ao usuário inserir dois valores numéricos e calcular o resultado da multiplicação. O app foi desenvolvido como parte dos estudos de **Análise e Desenvolvimento de Sistemas (ADS)**, com foco em boas práticas de **UX/UI**, **componentização** e **animações em React Native**.

O projeto é dividido em partes reutilizáveis:

- **Campo de entrada**: Recebe os números digitados pelo usuário.
- **Botão de ação**: Dispara o cálculo.
- **Componente de resultado**: Exibe o produto da multiplicação.
- **Animações**: De entrada suave para os elementos e exibição do resultado.

---

✨ **Funcionalidades**

- Entrada de dois números com placeholders personalizados  
- Cálculo imediato ao pressionar o botão "Calcular"  
- Validação básica de campos vazios ou inválidos  
- Layout moderno e responsivo com cores agradáveis  
- Componentes reutilizáveis com `props` (ex: botão e campos de texto)  
- Animações suaves na entrada do app e no resultado  
- Compatível com Android e iOS  

---

💻 **Tecnologias Utilizadas**

- **React Native**: Biblioteca principal para construção da interface  
- **JavaScript**: Linguagem principal utilizada  
- **Expo**: Plataforma para facilitar o desenvolvimento e testes  
- **Hooks**: `useState`, `useRef`, `useEffect`  
- **Animated API**: Para aplicar transições suaves  
- **Componentização com Props**: Tornando o app dinâmico e modular  
- **ScrollView e View**: Para organizar a interface de forma acessível  

---

📁 **Estrutura do Projeto**

```
multiplicador-numeros/
├── App.js                # Componente principal do aplicativo
├── src/
│   ├── custombutton.js   # Componente personalizado para o botão
│   ├── inputfield.js     # Componente personalizado para os campos de entrada
│   └── styles.js         # Estilos globais do aplicativo
```

---

🚀 **Como Executar o Projeto**

### Pré-requisitos

- Node.js instalado na máquina (opcional, apenas para desenvolvimento local).
- Conta no [Expo](https://expo.dev/) (para usar o Snack Expo).

### Executando no Snack Expo

1. Acesse o [Snack Expo](https://snack.expo.dev/).
2. Crie um novo projeto.
3. Substitua os arquivos padrão pelos seguintes:
   - `App.js`
   - `src/custombutton.js`
   - `src/inputfield.js`
   - `src/styles.js`
4. Copie o código fornecido neste repositório para os respectivos arquivos.
5. Execute o projeto no simulador ou em um dispositivo físico via Expo Go.

### Executando Localmente

1. Clone este repositório (se disponível) ou crie os arquivos manualmente.
2. Instale as dependências necessárias:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npx expo start
   ```
4. Abra o aplicativo no simulador ou em um dispositivo físico usando o aplicativo Expo Go.

---

📝 **Licença**

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

📞 **Contato**

- **Nome**: Beatriz Silva Santos
- **LinkedIn**: [linkedin.com/in/beatriz-silva-santos](https://www.linkedin.com/in/beatriz-silva-santos-419339235/)
