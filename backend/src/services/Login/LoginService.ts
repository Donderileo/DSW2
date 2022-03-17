import { getRepository } from "typeorm"
import { User } from "../../entities/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export class LoginService {
    async execute({ username, password }): Promise<Object | Error> {

        const repo = getRepository(User);
        const user = await repo.findOne({ username });

        if (!user) {
            return new Error("Invalid Username");
        }

        if (!await bcrypt.compare(password, user.password)) {
            return new Error("Password incorrect");
        }

        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET)

        return { user, token }
    }
}
