# Prática 3 – Interface de Cadastro de Usuário com React

## Descrição

Esta atividade teve como objetivo o desenvolvimento de uma interface web moderna utilizando React, aplicando conceitos fundamentais do desenvolvimento front-end, como componentização, gerenciamento de estado, usabilidade, responsividade e design centrado no usuário.

O sistema simula uma situação real de cadastro de usuários, semelhante às encontradas em plataformas de e-commerce, aplicativos e sistemas corporativos.

---

## Tecnologias Utilizadas

- React
- Vite
- JavaScript
- Bootstrap 5
- HTML5
- CSS3
- Git e GitHub

---

## Objetivos da Atividade

- Desenvolver uma interface utilizando React;
- Criar componentes reutilizáveis;
- Trabalhar com gerenciamento de estado utilizando Hooks;
- Implementar formulários interativos;
- Aplicar conceitos de usabilidade e experiência do usuário (UX);
- Construir uma interface responsiva para diferentes dispositivos.

---

## Funcionalidades Implementadas

### Cadastro de Usuário

O sistema possui um formulário contendo os seguintes campos:

- Nome Completo
- E-mail
- Telefone
- Senha
- Confirmar Senha

---

### Validação dos Dados

Foram implementadas validações para garantir uma melhor experiência ao usuário:

- Verificação de campos obrigatórios;
- Verificação de confirmação de senha;
- Exibição de mensagens de alerta em caso de erro;
- Confirmação visual quando o cadastro é realizado com sucesso.

---

### Exibição dos Dados Cadastrados

Após o preenchimento correto do formulário, os dados informados são exibidos dinamicamente na tela através de um componente específico para apresentação das informações do usuário.

Essa funcionalidade demonstra a utilização do gerenciamento de estado do React e a atualização dinâmica da interface sem necessidade de recarregar a página.

---

## Estrutura do Projeto

pratica3-react
│
├── src
│ ├── components
│ │ └── CardUsuario.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── public
├── package.json
├── vite.config.js
└── README.md

---

## Componentes Desenvolvidos

### App.jsx

Componente principal da aplicação.

Responsável por:

- controlar os estados do formulário;
- validar os dados inseridos;
- realizar o cadastro do usuário;
- exibir o componente de visualização dos dados.

---

### CardUsuario.jsx

Componente reutilizável responsável por exibir os dados cadastrados do usuário após o envio do formulário.

Essa separação demonstra o conceito de componentização utilizado pelo React.

---

## Conceitos de React Aplicados

### Componentização

A aplicação foi organizada em componentes independentes para facilitar manutenção, reutilização e organização do código.

### Hooks (useState)

Foi utilizado o Hook `useState` para controlar:

- nome;
- e-mail;
- telefone;
- senha;
- confirmação de senha;
- dados do usuário cadastrado.

### Renderização Condicional

O componente responsável por exibir os dados cadastrados só é renderizado após o preenchimento correto do formulário.

---

## Interface e Usabilidade

A interface foi desenvolvida utilizando Bootstrap 5, proporcionando:

- layout moderno;
- responsividade;
- melhor organização visual;
- facilidade de navegação;
- melhor experiência para o usuário.

As escolhas visuais foram realizadas considerando os princípios de Design Centrado no Usuário abordados na disciplina.

---

## Como Executar o Projeto

### Instalar dependências

npm install

### Executar aplicação

npm run dev

### Acessar no navegador

http://localhost:5174

(A porta pode variar conforme disponibilidade da máquina.)

---

## Resultado

A aplicação desenvolvida demonstra os principais conceitos do desenvolvimento front-end moderno utilizando React, incluindo componentização, gerenciamento de estado, formulários interativos, validação de dados e construção de interfaces responsivas.

O projeto atende aos objetivos propostos pela atividade ao simular um sistema de cadastro de usuários com foco em usabilidade, organização do código e experiência do usuário.
