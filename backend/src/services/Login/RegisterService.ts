import { getRepository } from "typeorm"
import { User } from "../../entities/User"

type UserType = {
    username: string;
    hashPassword: string
}

export class RegisterService {
    async execute({ username, hashPassword }: UserType): Promise<User | Error> {

        const repo = getRepository(User);
        const hasUser = await repo.findOne({ username })
        if (hasUser) {
            return new Error("User already exists");
        }


        const user = repo.create({ username, password: hashPassword });
        await repo.save(user);

        return user

    }
}
