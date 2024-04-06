const { v4: uuidv4 } = require("uuid");

class UserDTO {
  constructor({ user_id, user_email, user_password }, create = false) {
    if (create) {
      this.user_id = uuidv4();
    } else {
      this.user_id = this.setId(user_id);
    }
    this.user_email = user_email;
    this.user_password = this.setPassword(user_password);
  }

  setId(user_id) {
    if (user_id) {
      console.log("user id verdadeiro ");
    } else {
      console.log("user id falso ");
    }
    return user_id;
  }

  setPassword(user_password) {
    //if(!/\d{2}/.test(user_password)) throw new Error("tem que ter pelo menos um número")
    //if (!/[@#$*&]/.test(user_password)) 
    //throw new Error("tem que ter pelo menos um caracter especial @#$*&");
    if (!user_password) throw new Error("atributo não enviado");
    if (user_password.length < 8)
      throw new Error("a senha deve ter tamanho minimo de 8 caracteres");
    return user_password;
  }
}

module.exports = UserDTO;

