import { Request, Response } from "express";
import { ChangePwService } from "../../services/Login/ChangePwService";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

export class ChangePwController {
    async handle(request: Request, response: Response) {
        const { password, newPassword, token } = request.body;
        const newPasswordHash = await bcrypt.hash(newPassword, 10)

        const username = jwt.verify(token, process.env.JWT_SECRET).username;
        const service = new ChangePwService()
        await service.execute({ username, password, newPasswordHash })

        return response.status(200).json({ "message": "Password changed sucessfull" })
    }
}