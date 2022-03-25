import { Category } from '../model/Category';

// DTO
interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create({ name, description }: ICategoryDTO): void;
}

export { ICategoriesRepository, ICategoryDTO };
