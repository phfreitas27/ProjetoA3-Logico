const UserService = require('./user.service');
const userService = new UserService();
const UserDTO = require('./user.dto.js');
const { GenericException } = require("../generic-exception.js");

class UserController {
    createUser(req, res) {
        //const userDTO = new UserDTO(req.body,true);
        //const user = userService.create(new UserDTO(req.body,true));
        try {
            res.json(userService.create(new UserDTO(req.body, true)));
        } catch (error) {
            res.status(400).send({ err: 'Erro !' });
        }
    }

    getAllUsers(req, res) {
        const users = userService.findAll();
        res.json(users);
    }

    logarUser(req, res) {
        const { user_email, user_password } = req.body;
        const user = userService.logar(user_email, user_password);
        if (!user) {
            return res.status(404).send('register not found');
        }
        res.json(user);
    }

    updateSenha(req, res) {
        const { user_id ,user_password } = req.body;
        console.log("update user ", req.body);
        const updatedUser = userService.updateSenha(user_id,user_password);
        if (!updatedUser) return res.status(404).send('User not found');
        res.status(200).json(updatedUser);
    }

    resetSenha(req, res) {
        const { user_email } = req.body;
        console.log("update user ", req.body);
        const updatedUser = userService.resetSenha(user_email);
        if (!updatedUser) return res.status(404).send('User not found');
        res.status(200).json(updatedUser);
    }
}

module.exports = UserController;

