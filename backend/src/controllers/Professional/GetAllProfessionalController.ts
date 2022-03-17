import { Request, Response } from 'express';
import { GetProfessionalService } from '../../services/Professional/GetAllProfessionalService';

export class GetAllProfessionalController {
    async handle(request: Request, response: Response) {
        const { user_id } = request.body

        if (!user_id) {
            const service = new GetProfessionalService()
            const professionals = await service.executeAll();
            return response.status(200).json({ professionals })
        }
        else {
            const service = new GetProfessionalService()
            const professional = await service.executeOne(user_id);
            return response.status(200).json({ professional })
        }
    }
}