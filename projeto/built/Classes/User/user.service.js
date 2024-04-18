"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const user_dto_js_1 = __importDefault(require("./user.dto.js"));
const users = [
    {
        user_id: (0, crypto_1.randomUUID)(),
        user_email: "teste@teste.com",
        user_password: "1234567@",
    },
    {
        user_id: (0, crypto_1.randomUUID)(),
        user_email: "pedrofreitas@teste.com",
        user_password: "Pedro1210@",
    },
];
function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", returnValue = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        returnValue += charset.charAt(Math.floor(Math.random() * n));
    }
    return returnValue;
}
class UserService {
    create(UserDTO) {
        users.push(UserDTO);
        return UserDTO;
    }
    findAll() {
        return users.map((user) => new user_dto_js_1.default(user));
    }
    login(user_email, user_password) {
        return users.filter((user) => user.user_email === user_email && user.user_password === user_password);
    }
    updatePassword(user_id, user_password) {
        const userIndex = users.findIndex((user) => user.user_id === user_id);
        let foundUser = userIndex === -1 ? false : true;
        if (foundUser === false)
            return null;
        console.log("updade service ", userIndex);
        const updatePassword = { user_password };
        console.log('Update senha: ', updatePassword);
        users[userIndex].user_password = updatePassword['user_password'];
        return updatePassword;
    }
    resetPassword(user_email) {
        const userIndex = users.findIndex((user) => user.user_email === user_email);
        let foundUser = userIndex === -1 ? false : true;
        if (foundUser === false)
            return null;
        console.log("updade service ", userIndex);
        let new_user_password = generatePassword(8);
        const resetPassword = { new_user_password };
        console.log('Update senha: ', resetPassword);
        users[userIndex].user_password = new_user_password;
        return resetPassword;
    }
}
exports.default = UserService;
module.exports = UserService;
