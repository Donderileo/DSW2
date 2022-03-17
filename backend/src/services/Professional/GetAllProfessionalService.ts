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
        const client = await repo.findOne({ user_id })
        return client
    }
}

