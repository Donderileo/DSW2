import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { GetAllAppointmentService } from '../../services/Appointments/GetAllAppointmentService';

export class GetAllAppointmentController {
    async handle(request: Request, response: Response) {
        const { token } = request.body;

        try {
            const tokenObject = jwt.verify(token, process.env.JWT_SECRET)
            var user_id = tokenObject.id
            var role = tokenObject.role
        } catch (e) {
            return response.status(400).json("Token Expired")
        }

        const service = new GetAllAppointmentService()

        if (!role) {
            return response.status(400).json({ "message": "You dont have a role, so you dont have a appointment" })
        }
        else if (role == 'Client') {
            var appointments = await service.executeForClient(role, user_id)
        }
        else if (role == 'Professional') {
            var appointments = await service.executeForProfessional(role, user_id)
        }
        if (appointments instanceof Error) {
            return response.status(403).json(appointments.message)
        }

        return response.status(200).json({ appointments })
    }
}