import { getRepository } from "typeorm"
import { User } from "../../entities/User"


export class DeleteUserService {
    async execute({ user }) {
        const repo = getRepository(User)
        const user_delete = await repo.findOne({ id: user })

        if (!user_delete) {
            return new Error("This user doesn't exist")
        }
        console.log(user)
        const deleted = await repo.delete(user)
        return deleted;


    }
}