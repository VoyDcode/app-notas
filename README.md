# App de Notas com Autenticação (CP Mobile)

Este aplicativo foi desenvolvido em **React Native** com **Firebase Authentication** e **Firestore**. Atende a todos os requisitos do CheckPoint 4 da disciplina de Mobile Application Development (2TDS).

## 👨‍💻 Integrantes

- **Aluno:** Victor Rodrigues De Lima Lourenço - RM: 560087
- **Aluno:** Renato Silva Alexandre Bezerra - RM: RM560928


## 🚀 Funcionalidades

- **Autenticação:** Cadastro, Login e Logout (usando Firebase Auth).
- **CRUD de Notas:** Criar, editar, excluir (com confirmação) e listar notas.
- **Isolamento de Dados:** Cada usuário enxerga apenas suas próprias notas (Filtro por `userId`).
- **Recursos Extras:**
  - Filtro por título (barra de busca persistente em tempo real).
  - Ordenação automática (notas mais recentes aparecem primeiro).
  - Feedback visual com componentes de loading.
  - Alerta de confirmação antes de excluir.

## 📦 Tecnologias Utilizadas

- **React Native / Expo**
- **React Navigation** (Navegação Stack)
- **Firebase Authentication**
- **Cloud Firestore**

## ⚙️ Como executar

1. Clone o repositório ou baixe o código.
2. Navegue até a pasta raiz do projeto.
3. Instale as dependências executando:
   ```bash
   npm install
   ```
4. **Configuração do Firebase:**
   Vá no arquivo `src/config/firebase.js` e substitua todas as chaves (ex: `COLOQUE_SUA_API_KEY_AQUI`) pelos dados de um projeto Firebase previamente configurado com os serviços de **Authentication** (E-mail e Senha) e **Cloud Firestore** habilitados.
5. Inicie a aplicação via Expo:
   ```bash
   npx expo start
   ```
   *Leia o QR code pelo Expo Go no celular ou aperte "a" na linha de comando para emular com Android.*

## 📹 Vídeo de Demonstração

*Link:*
