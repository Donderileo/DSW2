import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { CreateAppointmentService } from '../../services/Appointments/CreateAppointmentService';


export class CreateAppointmentController {
    async handle(request: Request, response: Response) {
        const { token, user_id_professional, timedate } = request.body;
        try {
            const tokenObject = jwt.verify(token, process.env.JWT_SECRET)
            var user_id_client = tokenObject.id
        } catch (e) {
            return response.status(400).json("Token Expired")
        }
        const service = new CreateAppointmentService();
        const appointment = await service.execute(user_id_client, user_id_professional, timedate);

        if (appointment instanceof Error) {
            return response.status(403).json(appointment.message)
        }

        return response.status(200).json({ appointment })
    }
}