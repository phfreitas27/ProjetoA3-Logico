"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_controller_js_1 = __importDefault(require("./Classes/User/user.controller.js"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json()); // Para parsing de application/json
const userController = new user_controller_js_1.default();
app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users/login", (req, res) => userController.loginUser(req, res));
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.put("/users/:user_id/change-password", (req, res) => userController.updatePassword(req, res));
app.put("/users/:user_email/reset-password", (req, res) => userController.resetPassword(req, res));
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
