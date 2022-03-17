import { getRepository } from "typeorm"
import { Professional } from "../../entities/Professional"
import { User } from "../../entities/User";

type ProfessionalType = {
    user_id: string
    name: string
    area: string
    description: string
}


export class CreateProfessionalService {
    async execute(ProfessionalBody: ProfessionalType): Promise<Professional | Error> {
        const { user_id, name, area, description } = ProfessionalBody;

        const userRepo = getRepository(User);
        const userObject = await userRepo.findOne({ id: user_id })

        if (!userObject) {
            return new Error("User does not exist, how do you are here?");
        }
        if (userObject.role) {
            return new Error("User already have a role")
        }

        userObject.role = "Professional"
        userRepo.save(userObject)

        const repo = getRepository(Professional);
        const professional = repo.create({ user_id, name, area, description })
        await repo.save(professional);

        return professional
    }
}
