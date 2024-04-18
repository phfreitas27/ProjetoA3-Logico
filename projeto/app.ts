
import express from "express";
import bodyParser from "body-parser";
import UserController from "./User/user.controller.js";

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para parsing de application/json

const userController = new UserController();

app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users/login", (req, res) => userController.loginUser(req, res));
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.put("/users/:user_id/change-password", (req, res) => userController.updatePassword(req, res));
app.put("/users/:user_email/reset-password", (req, res) => userController.resetPassword(req, res))

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
