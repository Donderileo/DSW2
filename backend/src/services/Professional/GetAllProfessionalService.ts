import { getRepository } from "typeorm";
import { Professional } from "../../entities/Professional";


export class GetProfessionalService {
    async executeAll() {
        const repo = getRepository(Professional)
        const professionals = await repo.find()
        return professionals
    }
    async executeOne(user_id) {
        const repo = getRepository(Professional)
        const professional = await repo.findOne({ user_id:user_id })
        console.log(professional)
        return professional
    }
}

