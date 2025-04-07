# Cálculo do IMC - React Native

Este é um aplicativo móvel desenvolvido com **React Native** que permite calcular o **Índice de Massa Corporal (IMC)** com base no peso e na altura informados pelo(a) usuário(a), exibindo também a classificação correspondente.

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

O **Cálculo do IMC** é um app simples, intuitivo e com visual moderno, voltado para pessoas que desejam entender melhor sua condição corporal por meio do índice de massa corporal (IMC).  
A fórmula utilizada é:

> **IMC = peso (kg) ÷ (altura x altura)**

Após o cálculo, o app classifica automaticamente o resultado em categorias como "Peso normal", "Sobrepeso", "Obesidade Grau I", entre outras.

---

## ✨ Funcionalidades

- Campo de entrada para peso (em kg)  
- Campo de entrada para altura (em metros ou centímetros)  
- Cálculo do IMC com arredondamento para uma casa decimal  
- Classificação automática com base no valor do IMC  
- Tratamento de erros para entradas inválidas  
- Interface responsiva com ícones ilustrativos  
- Separação de componentes reutilizáveis (`Title`, `InputField`, `Button`, `Result`, `IMCImage`)

---

## 💻 Tecnologias Utilizadas

- **React Native**  
- **Expo**  
- **Animated API**  
- **Componentização com JavaScript (ES6)**  
- **StyleSheet**  
- **Hooks (useState)**

---

## 🗂️ Estrutura do Projeto

```
App-IMC/
│
├── src/
│   ├── Button.js           # Componente de botão personalizado
│   ├── InputField.js       # Campo de entrada com ícone
│   ├── Result.js           # Exibe IMC e classificação
│   ├── Title.js            # Título da aplicação
│   ├── IMCImage.js         # Imagem ilustrativa do IMC
│
├── App.js                  # Arquivo principal da aplicação
├── README.md               # Documentação do projeto
```

---

## ▶️ Como Executar o Projeto

### ✅ Pré-requisitos

- Node.js instalado  
- Expo CLI (`npm install -g expo-cli`)  
- Emulador Android/iOS ou celular com app **Expo Go**

### 🧭 Passos

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/app-imc.git
cd app-imc
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npx expo start
```

4. Escaneie o QR code com o app **Expo Go** ou use o emulador.

---

## 🤝 Contribuições

Contribuições são muito bem-vindas! Para contribuir:

1. Faça um fork deste repositório  
2. Crie uma branch com a nova funcionalidade ou correção  
```bash
git checkout -b minha-melhoria
```
3. Commit das suas alterações  
```bash
git commit -m "Melhoria na classificação do IMC"
```
4. Push da sua branch  
```bash
git push origin minha-melhoria
```
5. Abra um Pull Request descrevendo suas mudanças

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

- **Nome**: Beatriz Silva Santos  
- **LinkedIn**: [linkedin.com/in/beatriz-silva-santos-419339235](https://www.linkedin.com/in/beatriz-silva-santos-419339235/)

---

> Projeto desenvolvido como parte dos estudos em **Análise e Desenvolvimento de Sistemas**, com foco na prática de componentização, hooks, UX/UI e lógica em **React Native**. 