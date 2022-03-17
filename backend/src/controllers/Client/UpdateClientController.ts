import { Request, Response } from "express";
import { UpdateClientService } from "../../services/Client/UpdateClientService";
import jwt from "jsonwebtoken";



export class UpdateClientController {
    async handle(request: Request, response: Response) {
        const { token, name, age, user_id } = request.body;

        try {
            jwt.verify(token, process.env.JWT_SECRET)
        } catch (e) {
            return response.status(400).json("Token Expired");
        }


        const service = new UpdateClientService();

        const client = await service.execute({ user_id, name, age });

        if (client instanceof Error) {
            return response.status(400).json(client.message);
        }

        return response.status(200).json({
            "message": "Client updated",
            "client": client
        })
    }
}