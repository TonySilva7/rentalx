import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<User> {
    const hashedPassword = await hash(password, 8);
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error(`User '${name}' already exists`);
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      driver_license,
    });

    return user;
  }
}

export { CreateUserUseCase };
