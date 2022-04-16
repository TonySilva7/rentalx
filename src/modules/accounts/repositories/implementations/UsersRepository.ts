import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUserRepository';

class UsersRepository implements IUsersRepository {
  // >>> define propriedade com o type de Repository do TypeORM
  private repository: Repository<User>;

  constructor() {
    // >>> instancia o repository do TypeORM
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });
    return user;
  }

  async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<User> {
    const userDTO = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    const user = await this.repository.save(userDTO);

    return user;
  }
}

export { UsersRepository };
