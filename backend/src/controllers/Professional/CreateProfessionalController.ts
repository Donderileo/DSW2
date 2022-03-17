import { Request, Response } from "express";
import { CreateProfessionalService } from "../../services/Professional/CreateProfessionalService";
import jwt from "jsonwebtoken";



export class CreateProfessionalController {
    async handle(request: Request, response: Response) {
        const { token, name, area, description } = request.body;

        try {
            const tokenObject = jwt.verify(token, process.env.JWT_SECRET)
            var user_id = tokenObject.id

        } catch (e) {
            return response.status(400).json("Token Expired");
        }


        const service = new CreateProfessionalService();

        const professional = await service.execute({ user_id, name, area, description });

        if (professional instanceof Error) {
            return response.status(400).json(professional.message);
        }

        return response.status(200).json({
            "message": "Now you are a Professional",
            "professional": professional
        })

    }
}