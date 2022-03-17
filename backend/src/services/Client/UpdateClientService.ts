import { getRepository } from "typeorm"
import { Client } from "../../entities/Client";

type ClientType = {
    user_id: string
    name: string
    age: string
}


export class UpdateClientService {
    async execute(ClientBody: ClientType): Promise<Client | Error> {
        const { user_id, name, age } = ClientBody;

        const repo = getRepository(Client);
        const client = await repo.findOne({ user_id })

        if (!client) {
            return new Error("Client does not exist, how do you are here?");
        }

        client.name = name ? name : client.name;
        client.age = age ? Number(age) : client.age;


        await repo.save(client)

        return client
    }
}
