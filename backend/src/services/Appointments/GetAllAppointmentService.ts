import { getRepository } from "typeorm";
import { Appointment } from "../../entities/Appointment";

export class GetAllAppointmentService {
    async executeForClient(user_id) {
        const repo = getRepository(Appointment);
        const appointments = await repo.find({ client_id: user_id })
        console.log(appointments)
        if (!appointments) {
            return new Error("You dont have any appointments")
        }

        return appointments
    }

    async executeForProfessional(user_id) {
        const repo = getRepository(Appointment);
        const appointments = await repo.find({ professional_id: user_id })

        if (!appointments) {
            return new Error("You dont have any appointments")
        }

        return appointments
    }
}