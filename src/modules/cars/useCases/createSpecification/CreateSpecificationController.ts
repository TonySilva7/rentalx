import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);

    try {
      const specification = await createSpecificationUseCase.execute({
        name,
        description,
      });

      return response.status(201).json(specification);
    } catch (error) {
      return response.status(400).json({
        message: `${error}` || 'Unexpected error.',
      });
    }
  }
}

export { CreateSpecificationController };
