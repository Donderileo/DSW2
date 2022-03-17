import { getRepository } from "typeorm";
import { Appointment } from "../../entities/Appointment";

export class DeleteAppointmentService {
    async execute(user_id, client_id, professional_id, date) {
        const repo = getRepository(Appointment);
        const appointment = await repo.findOne({ client_id, professional_id, date });

        if (!appointment) {
            return new Error("this appointment not exists")
        }
        else if (appointment.client_id == user_id || appointment.professional_id == user_id) {
            var deleted = await repo.delete({ client_id, professional_id, date });
        }
        else {
            return new Error("this appointment its not yours")
        }

        return deleted;
    }
}