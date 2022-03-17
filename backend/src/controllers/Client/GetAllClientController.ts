import { Request, Response } from 'express';
import { GetClientService } from '../../services/Client/GetClientService';

export class GetAllClientController {
    async handle(request: Request, response: Response) {
        const { user_id } = request.body
        if (!user_id) {
            const service = new GetClientService()
            const clients = await service.executeAll();
            return response.status(200).json({ clients })
        }
        else {
            const service = new GetClientService()
            const client = await service.executeOne(user_id);
            return response.status(200).json({ client })
        }
    }
}