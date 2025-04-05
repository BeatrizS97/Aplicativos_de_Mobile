# 🎉 Contador de Pessoas - React Native

Este é um projeto simples de **Contador de Pessoas** desenvolvido com **React Native**, uma biblioteca JavaScript para criar interfaces móveis nativas. O objetivo deste projeto é praticar conceitos fundamentais do React, como **useState** e **useEffect**, além de demonstrar a construção de uma interface interativa para controle de entrada e saída de pessoas em uma loja.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Como Executar o Projeto](#como-executar-o-projeto)
6. [Contribuições](#contribuições)
7. [Licença](#licença)

---

## 🌟 Visão Geral

O **Contador de Pessoas** é uma aplicação móvel que simula o controle de entrada e saída de pessoas em uma loja fictícia chamada **"❄️✨ Inverno Encantado"**. Ele foi desenvolvido como parte dos estudos de **Análise e Desenvolvimento de Sistemas (ADS)** para praticar conceitos importantes do React Native, como:

- **Estado (useState)**: Para gerenciar o número de pessoas na loja.
- **Efeitos (useEffect)**: Para monitorar mudanças no estado e exibir alertas sempre que o número de pessoas for atualizado.
- **Componentização**: Divisão da interface em componentes modulares e reutilizáveis.

---

## ✨ Funcionalidades

- **Contador Dinâmico**: Permite adicionar ou remover pessoas da loja usando botões interativos.
- **Alerta Automático**: Sempre que o número de pessoas for alterado, um alerta é exibido na tela.
- **Nome Personalizado da Loja**: O nome da loja é passado como propriedade (`props`) ao componente `Contador`, permitindo personalização.
- **Interface Simples e Intuitiva**: A aplicação utiliza botões e textos claros para facilitar a interação do usuário.

---

## 💻 Tecnologias Utilizadas

- **React Native**: Biblioteca para desenvolvimento de aplicações móveis nativas usando JavaScript.
- **JavaScript**: Linguagem principal usada no desenvolvimento.
- **Hooks**:
  - `useState`: Para gerenciar o estado do contador.
  - `useEffect`: Para executar efeitos colaterais quando o estado muda.
- **Componentes Nativos**:
  - `ScrollView`: Permite rolagem caso o conteúdo seja extenso.
  - `View`, `Text`, `Button`: Componentes básicos do React Native para construção da interface.
- **CSS-like Styling**: Estilização dos componentes feita com objetos de estilo no React Native.

---

## 🗂 Estrutura do Projeto

Abaixo está a estrutura de arquivos e pastas do projeto:

```
projeto-contador/
├── src/
│   ├── Contador.js       # Componente funcional que implementa o contador de pessoas.
│   └── styles.js         # Arquivo de estilos compartilhado entre os componentes.
├── App.js                # Componente principal da aplicação.
└── README.md             # Documentação do projeto.
```

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

- **React Native CLI**: Instale globalmente com `npm install -g react-native-cli`.
- **Emulador Android/iOS**: Configure um emulador ou conecte um dispositivo físico.

### Passos para Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/projeto-contador.git
   cd projeto-contador
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   - Para Android:
     ```bash
     npx react-native run-android
     ```
   - Para iOS:
     ```bash
     npx react-native run-ios
     ```

4. **Teste a aplicação**:
   - Abra o emulador ou use um dispositivo físico para visualizar a aplicação.
   - Interaja com os botões "➕ Adicionar" e "➖ Remover" para controlar o número de pessoas na loja.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se você deseja melhorar este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie as alterações para o repositório remoto:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request explicando suas alterações.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Nome**: Beatriz Silva Santos
- **LinkedIn**: [linkedin.com/in/beatriz-silva-santos](https://www.linkedin.com/in/beatriz-silva-santos-419339235/)

---

> Este projeto foi criado como parte dos estudos em **Análise e Desenvolvimento de Sistemas** e tem como objetivo demonstrar boas práticas de desenvolvimento móvel com React Native. 😊
