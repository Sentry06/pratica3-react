# Prática 3 – Interface de Cadastro de Usuário com React

## Descrição

Esta atividade teve como objetivo o desenvolvimento de uma interface web moderna utilizando React, aplicando conceitos fundamentais do desenvolvimento front-end, como componentização, gerenciamento de estado, usabilidade, responsividade e design centrado no usuário.

O sistema simula uma situação real de cadastro de usuários, semelhante às encontradas em plataformas de e-commerce, aplicativos e sistemas corporativos.

Como complemento da atividade, foi desenvolvida uma API REST utilizando Node.js e Express para integrar o formulário React ao backend, permitindo que os dados cadastrados sejam enviados e manipulados através de requisições HTTP, podendo ser testados tanto pela interface da aplicação quanto pelo Postman.

---

## Tecnologias Utilizadas

### Frontend

* React
* Vite
* JavaScript
* Bootstrap 5
* HTML5
* CSS3

### Backend

* Node.js
* Express
* CORS

### Ferramentas

* Git
* GitHub
* Postman

---

## Objetivos da Atividade

* Desenvolver uma interface utilizando React;
* Criar componentes reutilizáveis;
* Trabalhar com gerenciamento de estado utilizando Hooks;
* Implementar formulários interativos;
* Aplicar conceitos de usabilidade e experiência do usuário (UX);
* Construir uma interface responsiva para diferentes dispositivos;
* Desenvolver uma API REST para comunicação entre Frontend e Backend;
* Realizar testes dos endpoints utilizando o Postman.

---

## Funcionalidades Implementadas

### Cadastro de Usuário

O sistema possui um formulário contendo os seguintes campos:

* Nome Completo;
* E-mail;
* Telefone;
* Senha;
* Confirmar Senha.

---

### Validação dos Dados

Foram implementadas validações para garantir uma melhor experiência ao usuário:

* Verificação de campos obrigatórios;
* Verificação da confirmação de senha;
* Exibição de mensagens de alerta em caso de erro;
* Confirmação visual quando o cadastro é realizado com sucesso.

---

### Integração com API REST

Após o preenchimento correto do formulário, os dados deixam de ser armazenados apenas na aplicação React e passam a ser enviados para uma API REST desenvolvida em Node.js utilizando Express.

A comunicação entre o Frontend e o Backend é realizada através da função `fetch()`, utilizando requisições HTTP no formato JSON.

Essa integração demonstra o funcionamento de uma aplicação Full Stack, onde o Frontend consome serviços disponibilizados pelo Backend.

---

### Exibição dos Dados

Após o cadastro, a API retorna o objeto do usuário criado e a interface React atualiza automaticamente o componente responsável por apresentar as informações cadastradas.

Essa funcionalidade demonstra a atualização dinâmica da interface sem necessidade de recarregar a página.

---

## API Desenvolvida

Foi implementada uma API REST para gerenciamento de usuários contendo as seguintes rotas:

| Método | Endpoint     | Descrição                                |
| ------ | ------------ | ---------------------------------------- |
| GET    | /            | Retorna mensagem de funcionamento da API |
| GET    | /usuarios    | Lista todos os usuários cadastrados      |
| GET    | /usuario/:id | Busca um usuário pelo ID                 |
| POST   | /usuarios    | Cadastra um novo usuário                 |
| PUT    | /usuario/:id | Atualiza um usuário existente            |
| DELETE | /usuario/:id | Remove um usuário                        |

Os dados são armazenados em memória através de um array de objetos, conforme proposto na atividade.

---

## Testes com Postman

A API foi validada utilizando o Postman, realizando testes em todos os endpoints desenvolvidos.

Foram executadas requisições utilizando os métodos:

* GET
* POST
* PUT
* DELETE

Os testes comprovaram o correto funcionamento das operações de consulta, cadastro, atualização e remoção de usuários.

---

## Estrutura do Projeto

```
PRÁTICA 3
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── node_modules
│
└── pratica3-react
    │
    ├── src
    │   ├── components
    │   │   └── CardUsuario.jsx
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── public
    ├── package.json
    ├── vite.config.js
    └── README.md
```

---

## Componentes Desenvolvidos

### App.jsx

Componente principal da aplicação.

Responsável por:

* controlar os estados do formulário;
* validar os dados inseridos;
* realizar o envio das informações para a API utilizando `fetch()`;
* receber a resposta do servidor;
* atualizar a interface com os dados cadastrados.

---

### CardUsuario.jsx

Componente reutilizável responsável por apresentar os dados do usuário retornados pela API após o cadastro.

Essa separação demonstra o conceito de componentização utilizado pelo React.

---

## Conceitos de React Aplicados

### Componentização

A aplicação foi organizada em componentes independentes para facilitar manutenção, reutilização e organização do código.

### Hooks (useState)

Foi utilizado o Hook `useState` para controlar:

* nome;
* e-mail;
* telefone;
* senha;
* confirmação de senha;
* dados do usuário retornado pela API.

### Comunicação com APIs

Foi utilizada a função `fetch()` para realizar requisições HTTP entre o Frontend React e o Backend desenvolvido em Express.

### Renderização Condicional

O componente responsável por exibir os dados cadastrados somente é renderizado após o retorno bem-sucedido da API.

---

## Interface e Usabilidade

A interface foi desenvolvida utilizando Bootstrap 5, proporcionando:

* layout moderno;
* responsividade;
* melhor organização visual;
* facilidade de navegação;
* melhor experiência para o usuário.

As escolhas visuais foram realizadas considerando os princípios de Design Centrado no Usuário abordados na disciplina.

---

## Como Executar o Projeto

### Backend

Entrar na pasta:

```
cd backend
```

Instalar dependências:

```
npm install
```

Executar a API:

```
node server.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

### Frontend

Entrar na pasta:

```
cd pratica3-react
```

Instalar dependências:

```
npm install
```

Executar a aplicação:

```
npm run dev
```

Acessar:

```
http://localhost:5174
```

(A porta pode variar conforme disponibilidade da máquina.)

---

## Resultado

A aplicação desenvolvida demonstra os principais conceitos do desenvolvimento Front-End moderno utilizando React, incluindo componentização, gerenciamento de estado, formulários interativos, validação de dados, consumo de APIs REST e construção de interfaces responsivas.

Além da interface desenvolvida em React, foi implementada uma API REST em Node.js utilizando Express, permitindo a integração entre Frontend e Backend por meio de requisições HTTP, com validação dos endpoints através do Postman.

O projeto atende aos objetivos propostos pela atividade ao simular um sistema de cadastro de usuários completo, demonstrando conceitos fundamentais do desenvolvimento Full Stack, organização do código, comunicação cliente-servidor e consumo de serviços web.
