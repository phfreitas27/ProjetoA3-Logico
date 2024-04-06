// app.js
const express = require("express");
const bodyParser = require("body-parser");
const UserController = require("./User/user.controller.js");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para parsing de application/json

const userController = new UserController();

app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users/logar", (req, res) => userController.logarUser(req, res));
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.put("/users/:user_id/change-password", (req, res) => userController.updateSenha(req, res));



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
