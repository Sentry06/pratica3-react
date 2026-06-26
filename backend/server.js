const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [
    {
        id: 1,
        nome: "Allan",
        email: "allan@gmail.com",
        telefone: "(21)99999-9999",
        senha: "123456"
    }
];

let nextId = 2;

app.get("/", (req, res) => {
    res.json({
        message: "API Cadastro de Usuários"
    });
});

app.get("/usuarios", (req, res) => {
    res.json(users);
});

app.get("/usuario/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        });
    }

    res.json(user);

});

app.post("/usuarios", (req, res) => {

    const { nome, email, telefone, senha } = req.body;

    const newUser = {
        id: nextId,
        nome,
        email,
        telefone,
        senha
    };

    users.push(newUser);
    nextId++;

    res.status(201).json(newUser);

});

app.put("/usuario/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        });
    }

    const { nome, email, telefone, senha } = req.body;

    if (nome !== undefined) user.nome = nome;
    if (email !== undefined) user.email = email;
    if (telefone !== undefined) user.telefone = telefone;
    if (senha !== undefined) user.senha = senha;

    res.json(user);

});

app.delete("/usuario/:id", (req, res) => {

    const id = Number(req.params.id);

    const exists = users.some(user => user.id === id);

    if (!exists) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        });
    }

    users = users.filter(user => user.id !== id);

    res.status(204).send();

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});