import { getRepository } from "typeorm";
import { Appointment } from "../../entities/Appointment";


export class CreateAppointmentService {
    async execute(user_id_client, user_id_professional, timedate) {
        const repo = getRepository(Appointment);
        const appointmentExistent = await repo.findOne({ professional_id: user_id_professional, date: timedate })

        if (appointmentExistent) {
            return new Error("The professional is busy in this time")
        }

        const appointment = repo.create({ client_id: user_id_client, professional_id: user_id_professional, date: timedate })
        await repo.save(appointment);

        return appointment
    }
}
