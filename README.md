# 📱 SafeZone App – Mobile

Este é o aplicativo **SafeZone**, desenvolvido em React Native com integração à API RESTful em .NET. Ele permite o cadastro, listagem e gerenciamento de abrigos em situações de risco.

---
Grupo: Ander Kenji Kamada RM553449
       Felipe Faria Semensato RM553415
       José Alexandre de Farias Neto RM553973
---

## ✅ Requisitos

### 🔧 Ferramentas obrigatórias:
- [Node.js (LTS)](https://nodejs.org)
- [Expo CLI](https://docs.expo.dev)
- [Android Studio + Emulador Android configurado](https://developer.android.com/studio)
- [.NET 7 SDK ou superior](https://dotnet.microsoft.com/download)
- [Visual Studio Code](https://code.visualstudio.com/)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo.git
cd app-reactnative

# 2. Instale as dependências do app mobile:

npm install

# 3. Configure o IP da API no projeto
Abra o arquivo:
src/services/api.ts

Substitua:
baseURL: 'http://localhost:5079/api'
(se estiver rodando em emulador Android):
Rode no terminal, ipconfig e vc saberá seu Ipv4, substituia por seu ip.
baseURL: 'http://10.0.2.2:5079/api' (este é um exemplo com o ip do meu computador, no qual rodei o projeto pelo emulador)

4. Execute a API
Abra uma nova janela e clone o repositorio da API 
git clone https://github.com/AnderKamada/SafeZoneAPI.git

No diretório da API:
cd SafeZoneAPI
dotnet run

Acesse o Swagger em:
http://localhost:5079/swagger/index.html

5. Rode o app mobile
npx expo start 
Depois escolha a opção:
Open with android (Rode o emulador para quando abrir com o android, ele abra o expo go)


📦 Funcionalidades implementadas
- Login e registro com Firebase Auth
- Persistência com @react-native-async-storage/async-storage
- Cadastro de Abrigos (POST)
- Listagem de Abrigos (GET)
- Integração com API em .NET
- Interface moderna com React Native

