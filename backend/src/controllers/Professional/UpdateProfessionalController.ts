import { Request, Response } from "express";
import { UpdateProfessionalService } from "../../services/Professional/UpdateProfessionalService";
import jwt from "jsonwebtoken";



export class UpdateProfessionalController {
    async handle(request: Request, response: Response) {
        const { token, name, area, description, user_id } = request.body;

        try {
            jwt.verify(token, process.env.JWT_SECRET)
        } catch (e) {
            return response.status(400).json("Token Expired");
        }


        const service = new UpdateProfessionalService();

        const professional = await service.execute({ user_id, name, area, description });

        if (professional instanceof Error) {
            return response.status(400).json(professional.message);
        }

        return response.status(200).json({
            "message": "Professional updated",
            "professional": professional
        })

    }
}