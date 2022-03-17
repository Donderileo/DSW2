import { Request, Response } from "express";
import { LoginService } from "../../services/Login/LoginService";

export class LoginController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const service = new LoginService();
        const user = await service.execute({ username, password });

        if (user instanceof Error) {
            return response.status(400).json(user.message)
        }

        return response.status(200).json(user)
    }
}