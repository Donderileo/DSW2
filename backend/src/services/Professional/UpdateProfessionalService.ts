import { getRepository } from "typeorm"
import { Professional } from "../../entities/Professional"

type ProfessionalType = {
    user_id: string
    name: string
    area: string
    description: string
}


export class UpdateProfessionalService {
    async execute(ProfessionalBody: ProfessionalType): Promise<Professional | Error> {
        const { user_id, name, area, description } = ProfessionalBody;

        const repo = getRepository(Professional);
        const professional = await repo.findOne({ user_id })

        if (!professional) {
            return new Error("Professional does not exist, how do you are here?");
        }

        professional.name = name ? name : professional.name;
        professional.area = area ? area : professional.area;
        professional.description = description ? description : professional.description;

        await repo.save(professional)

        return professional
    }
}
