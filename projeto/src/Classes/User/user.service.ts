import { UUID, randomUUID } from "crypto";
import UserDTO from "./user.dto.js";

const users = [
  {
    user_id: randomUUID(),
    user_email: "teste@teste.com",
    user_password: "1234567@",
  },
  {
    user_id: randomUUID(),
    user_email: "pedrofreitas@teste.com",
    user_password: "Pedro1210@",
  },
];

function generatePassword(length: number) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      returnValue: string = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      returnValue += charset.charAt(Math.floor(Math.random() * n));
  }
  return returnValue;
}

export default class UserService {
  create(UserDTO: { user_id: UUID; user_email: string; user_password: string; }) {
    users.push(UserDTO);
    return UserDTO;
  }

  findAll() {
    return users.map((user) => new UserDTO(user));
  }

  login(user_email: string, user_password: string) {
    return users.filter((user) => user.user_email === user_email && user.user_password === user_password);
  }

  updatePassword(user_id: string, user_password: any) {
    const userIndex = users.findIndex((user) => user.user_id === user_id);

    let foundUser = userIndex === -1 ? false : true;

    if (foundUser === false) return null;
    
    console.log("updade service ", userIndex);
    const updatePassword = { user_password };
    console.log('Update senha: ', updatePassword);
    users[userIndex].user_password = updatePassword['user_password'];
    return updatePassword;
  }

  resetPassword(user_email: string) {
    const userIndex = users.findIndex((user) => user.user_email === user_email);

    let foundUser = userIndex === -1 ? false : true;

    if (foundUser === false) return null;

    console.log("updade service ", userIndex);

    let new_user_password: string = generatePassword(8);

    const resetPassword = { new_user_password };
    console.log('Update senha: ',resetPassword);
    users[userIndex].user_password = new_user_password
    return resetPassword;
  }
}


module.exports = UserService;