const { v4: uuidv4 } = require("uuid");
const User = require("./user.entity.js");
const UserDTO = require("./user.dto.js");
const { GenericException } = require("../generic-exception.js");

const users = [
  {
    user_id: uuidv4(),
    user_email: "teste@teste.com",
    user_password: "1234567@",
  },
  {
    user_id: uuidv4(),
    user_email: "pedrofreitas@teste.com",
    user_password: "Pedro1210@",
  },
];

class UserService {
  create(UserDTO) {
    users.push(UserDTO);
    return UserDTO;
  }

  findAll() {
    return users.map((user) => new UserDTO(user));
  }

  logar(user_email, user_password) {
    return users.filter((user) => user.user_email === user_email && user.user_password === user_password);
  }

  updateSenha(user_id, user_password) {
    const userIndex = users.findIndex((user) => user.user_id === user_id);
    if (userIndex === -1) return null;
    console.log("updade service ", userIndex);
    const updatesenha = { user_password };
    console.log('Update senha: ',updatesenha);
    users[userIndex].user_password = updatesenha['user_password'];
    return updatesenha;
  }

  resetSenha(user_email) {
    const userIndex = users.findIndex((user) => user.user_email === user_email);
    if (userIndex === -1) return null;
    console.log("updade service ", userIndex);

    let user_password = "12345678";

    const resetSenha = { user_password };
    console.log('Update senha: ',resetSenha);
    users[userIndex].user_password = resetSenha['user_password'];
    return resetSenha;
  }
}


module.exports = UserService;