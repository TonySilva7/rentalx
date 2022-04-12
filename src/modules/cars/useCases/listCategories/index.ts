import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoryUseCase';

export default (): ListCategoriesController => {
  const categoryRepository = new CategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
  const listCategoryController = new ListCategoriesController(listCategoriesUseCase);

  return listCategoryController;
};
