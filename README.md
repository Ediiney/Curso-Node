# 📦 CRUD de Usuários com Node.js, Express, EJS e MongoDB

Este é um projeto simples de CRUD (Create, Read, Update, Delete) de usuários, desenvolvido com as tecnologias Node.js, Express e EJS para o frontend, utilizando MongoDB como banco de dados. O Postman foi usado para testar e interagir com a API backend.

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express.js** – Framework web para Node.js
- **EJS** – Template engine para renderizar HTML com JavaScript
- **MongoDB** – Banco de dados NoSQL
- **Mongoose** – ODM para MongoDB
- **Postman** – Ferramenta para testar APIs REST

## 💡 Funcionalidades

- 📥 Criar novo usuário
- 👁️ Visualizar lista de usuários
- ✏️ Editar informações de um usuário
- ❌ Deletar usuário

## 📂 Estrutura do Projeto

## 🔧 Como rodar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo

##Instale as dependências:
npm install

## Configure o MongoDB
MONGO_URI=mongodb://localhost:27017/crud-usuarios

## Inicie o servidor
npm start

## Acesse no navegador
http://localhost:3000

📬 Testando a API com Postman
As seguintes rotas estão disponíveis:

GET /users - Listar todos os usuários

GET /users/:id - Buscar um usuário por ID

POST /users - Criar um novo usuário

PUT /users/:id - Atualizar dados de um usuário

DELETE /users/:id - Deletar um usuário

## Requisição via Postman

![image](https://github.com/user-attachments/assets/ccc56aad-823d-46ff-8e28-041166985153)


## Front End

![image](https://github.com/user-attachments/assets/db9d4344-ea93-42c6-bdbf-7a9fb36c78da)

