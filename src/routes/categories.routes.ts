import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();
const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp/',
});

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), importCategoriesController.handle);

export { categoriesRoutes };
