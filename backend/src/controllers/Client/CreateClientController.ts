import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { CreateClientService } from '../../services/Client/CreateClientService';


export class CreateClientController {
    async handle(request: Request, response: Response) {
        const { token, name, age } = request.body;

        try {
            const tokenObject = jwt.verify(token, process.env.JWT_SECRET)
            var user_id = tokenObject.id
        } catch (e) {
            return response.status(400).json("Token Expired")
        }

        const service = new CreateClientService();
        const client = await service.execute({ user_id, name, age })

        if (client instanceof Error) {
            return response.status(400).json(client.message);
        }


        return response.status(200).json({
            'message': 'Now you are a Client',
            "client": client
        })
    }
}