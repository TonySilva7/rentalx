import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICategoryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  constructor() {
    this.repository = getRepository(Category); // instancia o repository do TypeORM
  }

  private repository: Repository<Category>; // repository do TypeORM

  async create({ name, description }: ICategoryDTO): Promise<Category> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
