import { Category } from '../../model/Category';
import { ICategoriesRepository, ICategoryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private constructor() {
    this.categories = [];
  }

  private categories: Category[];
  // Implements GoF - Singleton
  private static INSTANCE: ICategoriesRepository;

  public static getInstance(): ICategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }
  // end Singleton

  create({ name, description }: ICategoryDTO): Category {
    const category = new Category();

    Object.assign(category, { name, description, created_at: new Date() });

    this.categories.push(category);

    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
