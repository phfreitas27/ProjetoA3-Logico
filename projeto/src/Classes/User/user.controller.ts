import UserService from './user.service';
const userService = new UserService();
import UserDTO from './user.dto';

import { Request, Response } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export default class UserController {
    createUser(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        //const userDTO = new UserDTO(req.body,true);
        //const user = userService.create(new UserDTO(req.body,true));
        try {
            res.json(userService.create(new UserDTO(req.body, true)));
        } catch (error) {
            res.status(400).send({ err: 'Erro !' });
        }
    }

    getAllUsers(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        const users = userService.findAll();
        res.json(users);
    }

    loginUser(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        const { user_email, user_password } = req.body;
        const user = userService.login(user_email, user_password);
        if (!user) {
            return res.status(404).send('register not found');
        }
        res.json(user);
    }

    updatePassword(req: Request<{ user_id: string; }, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        const { user_id ,user_password } = req.body;
        console.log("update user ", req.body);
        const updatedUser = userService.updatePassword(user_id,user_password);
        if (!updatedUser) return res.status(404).send('User not found');
        res.status(200).json(updatedUser);
    }

    resetPassword(req: Request<{ user_email: string; }, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        const { user_email } = req.body;
        console.log("update user ", req.body);
        const updatedUser = userService.resetPassword(user_email);
        if (!updatedUser) return res.status(404).send('User not found');
        res.status(200).json(updatedUser);
    }
}

module.exports = UserController;

