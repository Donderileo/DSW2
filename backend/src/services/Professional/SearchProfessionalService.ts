import { getRepository } from "typeorm";
import { Professional } from "../../entities/Professional";
import {Like} from "typeorm";

export class SearchProfessionalService {
    async execute(search: string): Promise<Professional[] | Error> {

        const repo = getRepository(Professional);
        console.log(search)
        const professionals = await repo.find({name: Like (`${search}%`)})
        
        return professionals
    }
}