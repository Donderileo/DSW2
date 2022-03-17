import { Request, Response } from 'express';
import { LoginService } from '../../services/Login/LoginService';
import { DeleteUserService } from '../../services/Login/DeleteUserService';

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { user, password } = request.body;

        const loginService = new LoginService();
        const admin = await loginService.execute({ username: "admin", password })

        if (admin instanceof Error) {
            return response.status(400).json("ADMIN?")
        }

        const service = new DeleteUserService()
        const deleted = await service.execute({ user });

        return response.status(200).json({ deleted })
    }
}