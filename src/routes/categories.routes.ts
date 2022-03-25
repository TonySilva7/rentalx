import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { ICategoriesRepository } from '../modules/cars/repositories/ICategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository: ICategoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryServices = new CreateCategoryService(
    categoriesRepository,
  );

  createCategoryServices.execute({ name, description });

  return response.status(201).json(categoriesRepository);
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();
  return response.status(200).json(categories);
});

export { categoriesRoutes };
