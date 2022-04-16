import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      const userRequest = {
        name,
        email,
        password,
        driver_license,
      };

      const userResponse = await createUserUseCase.execute(userRequest);

      return response.status(201).json(userResponse);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

export { CreateUserController };
