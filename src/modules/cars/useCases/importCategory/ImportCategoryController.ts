import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    try {
      await importCategoryUseCase.execute(file as Express.Multer.File);

      return response.status(201).json({ message: 'Importação realizada com sucesso!' });
    } catch (error) {
      return response.status(400).json({
        message: `${error}` || 'Unexpected error.',
      });
    }
  }
}

export { ImportCategoryController };
