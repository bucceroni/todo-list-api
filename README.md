# todo-list-api

Node

<hr>

## Descrição do Projeto

CRUD para projeto frontend [todo-list](https://github.com/bucceroni/todo-list)

- Requisitos

  - Sistema operacional: Windows, Mac ou Linux
  - Browser (Google Chrome, Firefox, etc...)
  - [Node.JS](https://nodejs.org/en/) - V.10.15.3

- Dependências
  - body-parser - `npm install body-parser`
  - cors - `npm install cors`
  - dotenv - `npm install dotenv`
  - express - `npm install express`
  - mongodb - `npm install mongodb`
  - mongoose - `npm install mongoose`
  - nodemon - `npm install nodemon`

<hr>

## Banco de Dados - MongoDB

Software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com schemas.

- Instalação
  - Documentação [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)

<hr>

## Iniciar projeto

- Clone o repositório (Terminal)

  - escolher diretório (exemplo) `cd Documents`
  - clonar repositório `git clone https://github.com/bucceroni/todo-list-api.git`

- Inicie o projeto (Terminal)

  - `cd todo-list-api`
  - Instalar dependências `npm install`
  - Iniciar APP `npm start`
  - acessar URL `http://localhost:5000/`

- Configurar Banco de Dados
  - Criar arquivo .env na raiz(/src) e adicionar a conexão local com o MongoDB substituindo a variável `SECRET_KEY`
  ```
  MONGODB_URI=SECRET_KEY
  ```
  - Não esquecer de adicionar o arquivo `.env` no arquivo `.gitignore`

<hr>

## Deploy

- Heroku
  - Aplicação disponível em:
  - [https://todo-list-api-leo.herokuapp.com/](https://todo-list-api-leo.herokuapp.com/)

<hr>

## Postman
 - Link 
    - [https://www.getpostman.com/collections/018db4a0e26665e2867e](https://www.getpostman.com/collections/018db4a0e26665e2867e)

<hr>
