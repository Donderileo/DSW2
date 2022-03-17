import { getRepository } from "typeorm"
import { Client } from "../../entities/Client"
import { User } from "../../entities/User";

type ClientType = {
    user_id: string
    name: string
    age: number
}


export class CreateClientService {
    async execute(ClientBody: ClientType): Promise<Client | Error> {
        const { user_id, name, age } = ClientBody;

        const repoUser = getRepository(User);
        const user = await repoUser.findOne({ id: user_id })

        if (!user) {
            return new Error("User does not exist, how do you are here?")
        }
        if (user.role) {
            return new Error("User already have a role")
        }

        user.role = "Client"
        repoUser.save(user)

        const repo = getRepository(Client)
        const client = repo.create({ user_id, name, age })
        await repo.save(client)

        return client
    }
}
