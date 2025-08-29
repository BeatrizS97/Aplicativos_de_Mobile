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

## 📲 **Como Acessar o App**

### 1. **Acessando via Expo Snack - Simples e Rápido!**
Acesse e teste o app diretamente no seu navegador! 🎉

- **Passo 1**: Clique no link abaixo para abrir o projeto no **Expo Snack**:
  [Abrir no Expo Snack](https://snack.expo.dev/@beatrizss97/app05---aplicativo-imc)

- **Passo 2**: Você pode testar no navegador ou, se preferir, escanear o **QR Code** com o **Expo Go** no seu celular para ver o app em tempo real.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

- **Nome**: Beatriz Silva Santos  
- **LinkedIn**: [linkedin.com/in/beatriz-silva-santos-419339235](https://www.linkedin.com/in/beatriz-silva-santos-419339235/)

---

> Projeto desenvolvido como parte dos estudos em **Análise e Desenvolvimento de Sistemas**, com foco na prática de componentização, hooks, UX/UI e lógica em **React Native**. 
