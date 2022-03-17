import { Request, Response } from "express";
import { RegisterService } from "../../services/Login/RegisterService";
import bcrypt from "bcryptjs"


export class RegisterController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;
        const hashPassword = await bcrypt.hash(password, 10)

        const service = new RegisterService();
        const user = await service.execute({ username, hashPassword });

        if (user instanceof Error) {
            return response.status(400).json(user.message);
        }

        return response.status(200).json({
            "message": "User created",
            "user": user
        })
    }
}