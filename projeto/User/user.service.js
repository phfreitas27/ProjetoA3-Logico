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

function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      returnValue = "";
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
    return users.map((user) => new UserDTO(user));
  }

  login(user_email, user_password) {
    return users.filter((user) => user.user_email === user_email && user.user_password === user_password);
  }

  updatePassword(user_id, user_password) {
    const userIndex = users.findIndex((user) => user.user_id === user_id);
    if (userIndex === -1) return null;
    console.log("updade service ", userIndex);
    const updatePassword = { user_password };
    console.log('Update senha: ', updatePassword);
    users[userIndex].user_password = updatePassword['user_password'];
    return updatePassword;
  }

  resetPassword(user_email) {
    const userIndex = users.findIndex((user) => user.user_email === user_email);
    if (userIndex === -1) return null;
    console.log("updade service ", userIndex);

    let new_user_password = generatePassword(8);

    const resetPassword = { new_user_password };
    console.log('Update senha: ',resetPassword);
    users[userIndex].user_password = resetPassword['user_password'];
    return resetPassword;
  }
}


module.exports = UserService;