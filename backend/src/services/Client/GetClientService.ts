import { getRepository } from "typeorm";
import { Client } from "../../entities/Client";


export class GetClientService {
    async executeAll() {
        const repo = getRepository(Client)
        const clients = await repo.find()
        return clients
    }
    async executeOne(user_id) {
        const repo = getRepository(Client)
        const client = await repo.findOne({ user_id })
        return client
    }
}

