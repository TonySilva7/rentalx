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

  async create({ name, username, email, driver_license, password }: ICreateUserDTO): Promise<User> {
    const userDTO = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });

    const user = await this.repository.save(userDTO);

    return user;
  }
}

export { UsersRepository };
