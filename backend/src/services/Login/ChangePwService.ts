import { getRepository } from "typeorm"
import { User } from "../../entities/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export class ChangePwService {
    async execute({ username, password, newPasswordHash }): Promise<User | Error> {
        const repo = getRepository(User);

        const user = await repo.findOne({ username });

        if (!user) {
            return new Error("Invalid Username");
        }

        if (!await bcrypt.compare(password, user.password)) {
            return new Error("Old Password incorrect");
        }
        if (!newPasswordHash) {
            return new Error("New password need at least 1 character")
        }

        user.password = newPasswordHash;
        repo.save(user);
        return user
    }
}