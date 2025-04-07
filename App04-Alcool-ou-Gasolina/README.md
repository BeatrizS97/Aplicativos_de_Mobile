# Álcool ou Gasolina? - React Native

Este é um aplicativo móvel desenvolvido com **React Native** que ajuda o(a) usuário(a) a decidir qual combustível é mais vantajoso: **álcool ou gasolina**. A ideia é simples, mas muito útil no dia a dia de motoristas que desejam economizar ao abastecer.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)  
2. [Funcionalidades](#funcionalidades)  
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)  
4. [Estrutura do Projeto](#estrutura-do-projeto)  
5. [Como Executar o Projeto](#como-executar-o-projeto)  
6. [Contribuições](#contribuições)  
7. [Licença](#licença)  
8. [Contato](#contato)  

---

## 🌟 Visão Geral

O **Álcool ou Gasolina?** é um app intuitivo e visualmente agradável, com uma interface amigável, que realiza o cálculo com base na fórmula mais conhecida de economia:  
> Se o preço do álcool for menor que 70% do valor da gasolina, vale mais a pena abastecer com álcool. Caso contrário, gasolina é a melhor escolha.

Este app foi desenvolvido como parte dos estudos em **Análise e Desenvolvimento de Sistemas (ADS)** para praticar conceitos como:

- Criação de componentes reutilizáveis  
- Estilização com `StyleSheet`  
- Animações com `Animated`  
- Boas práticas de UX/UI  

---

## ✨ Funcionalidades

- Inserção dos valores de álcool e gasolina  
- Cálculo automático da melhor opção de abastecimento  
- Alerta em caso de campos vazios  
- Animação de botão para melhor feedback do usuário  
- Estilo limpo, moderno e responsivo  
- Exibição clara do resultado com destaque visual  

---

## 💻 Tecnologias Utilizadas

- **React Native**  
- **JavaScript (ES6+)**  
- **Expo**  
- **Animated API**  
- **StyleSheet para estilização**  
- **Alert e TextInput nativos**

---

## 🗂️ Estrutura do Projeto

```
App03-Multiplicacao-2-numeros/
│
├── assets/
│   └── image.png           # Imagem utilizada no app
│
├── src/
│   ├── BotaoVerificar.js        # Componente do botão com animação
│   ├── CampoPreco.js            # Campo de entrada com foco dinâmico
│   ├── ImagemDecorativa.js      # Componente da imagem do topo
│   ├── MensagemResultado.js     # Componente que mostra o resultado com fade
│   └── styles.js                # Estilos da aplicação
│
├── App.js                  # Arquivo principal da aplicação
├── README.md  

---

## ▶️ Como Executar o Projeto

### ✅ Pré-requisitos

- Node.js instalado  
- Expo CLI (se ainda não tiver, instale com `npm install -g expo-cli`)  
- Emulador Android/iOS ou dispositivo físico com o app Expo Go

### 🧭 Passos

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/alcool-ou-gasolina.git
cd alcool-ou-gasolina
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npx expo start
```

4. Escaneie o QR code com o app **Expo Go** no seu celular (ou use o emulador).

---

## 🤝 Contribuições

Contribuições são muito bem-vindas! Para contribuir:

1. Faça um fork do repositório  
2. Crie uma branch com sua melhoria:
```bash
git checkout -b feature/nova-funcionalidade
```
3. Faça commit das suas alterações:
```bash
git commit -m "Adiciona nova funcionalidade"
```
4. Envie para o repositório remoto:
```bash
git push origin feature/nova-funcionalidade
```
5. Abra um Pull Request explicando suas alterações.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais informações.

---

## 📞 Contato

Caso tenha dúvidas ou sugestões, entre em contato:

- **Nome**: Beatriz Silva Santos  
- **LinkedIn**: [linkedin.com/in/beatriz-silva-santos-419339235](https://www.linkedin.com/in/beatriz-silva-santos-419339235/)

---

> Este projeto foi desenvolvido com carinho durante os estudos de **Análise e Desenvolvimento de Sistemas**, com foco em aprimorar as habilidades em desenvolvimento mobile com **React Native**. 🚀✨
