"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class UserDTO {
    constructor(user, create = false) {
        if (create) {
            this.user_id = (0, crypto_1.randomUUID)();
        }
        else {
            this.user_id = this.setId(user.user_id);
        }
        this.user_email = user.user_email;
        this.user_password = this.setPassword(user.user_password);
    }
    setId(user_id) {
        if (user_id) {
            console.log("user id verdadeiro ");
        }
        else {
            console.log("user id falso ");
        }
        return user_id;
    }
    setPassword(user_password) {
        //if(!/\d{2}/.test(user_password)) throw new Error("tem que ter pelo menos um número")
        //if (!/[@#$*&]/.test(user_password)) 
        //throw new Error("tem que ter pelo menos um caracter especial @#$*&");
        if (!user_password)
            throw new Error("Atributo não enviado");
        if (user_password.length < 8)
            throw new Error("A senha deve ter tamanho minimo de 8 caracteres");
        return user_password;
    }
}
exports.default = UserDTO;
module.exports = UserDTO;
