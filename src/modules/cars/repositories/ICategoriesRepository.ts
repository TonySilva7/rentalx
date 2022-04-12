import { Category } from '../entities/Category';

// DTO
interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
}

export { ICategoriesRepository, ICategoryDTO };
