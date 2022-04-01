import { Request, Response } from 'express';
import { SearchProfessionalService } from '../../services/Professional/SearchProfessionalService';

export class SearchProfessionalController {
    async handle(request: Request, response: Response) {
        const service = new SearchProfessionalService();
        var resp = await service.execute(request.query.value.toString())
        return response.status(200).json({ 
            'message': 'OK',
            professionals: resp
        })
    }
}