import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    // injeção de dependência com o TSyringe
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    try {
      const category = await createCategoryUseCase.execute({
        name,
        description,
      });

      return response.status(201).json(category);
    } catch (err) {
      return response.status(400).json({
        message: String(err) || 'Unexpected error.',
      });
    }
  }
}

export { CreateCategoryController };
