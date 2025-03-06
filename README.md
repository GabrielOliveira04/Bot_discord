# 🤖 Bot Discord com OpenAI  

Este é um bot para Discord que utiliza a API da OpenAI para responder perguntas e auxiliar na programação. Ele foi desenvolvido em **Node.js** com a biblioteca **discord.js** e integra a IA do ChatGPT para fornecer respostas inteligentes dentro do servidor.
#### Obs: A API da OpenAi ainda estou melhorando
## 🚀 Funcionalidades  

- Responde perguntas utilizando a IA da OpenAI (ChatGPT 3.5).  
- Comandos personalizados para interações dentro do Discord.  
- Sistema de deploy de comandos utilizando `discord.js`.  
- Estruturado com boas práticas para fácil manutenção e expansão.  

## 🛠️ Tecnologias Utilizadas  

- **Node.js**  
- **discord.js**  
- **OpenAI API**  
- **dotenv** (para gerenciamento de variáveis de ambiente)  
- **Axios** (para requisições HTTP)  

## 📌 Como usar  

### 1️⃣ Instalar dependências  
``sh
npm install

### 2️⃣ Criar um arquivo .env e adicionar suas credenciais
TOKEN=seu_token_do_discord
CLIENT_ID=seu_client_id
GUILD_ID=seu_guild_id
OPENAI_API_KEY=sua_chave_api_openai

### 3️⃣ Registrar os comandos do bot
node deploy-commands.js

### 4️⃣ Iniciar o bot
node index.js

## 📌 Melhorias Futuras
Adicionar mais comandos interativos.
Melhorar a estrutura e modularização do código.
Implementar suporte para múltiplas guilds automaticamente.


