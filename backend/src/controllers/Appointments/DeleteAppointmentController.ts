import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { DeleteAppointmentService } from '../../services/Appointments/DeleteAppointmentService';

export class DeleteAppointmentController {
    async handle(request: Request, response: Response) {
        const { token, client_id, professional_id, date } = request.body;

        try {
            const tokenObject = jwt.verify(token, process.env.JWT_SECRET)
            var user_id = tokenObject.id

        } catch (e) {
            return response.status(400).json("Token Expired")
        }

        const service = new DeleteAppointmentService()

        const deleted = await service.execute(user_id, client_id, professional_id, date)

        if (deleted instanceof Error) {
            return response.status(404).json(deleted.message);
        }

        return response.status(400).json({ deleted })



    }
}