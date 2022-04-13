import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';

const myRoutes = Router();

myRoutes.use('/categories', categoriesRoutes);
myRoutes.use('/specifications', specificationRoutes);

export { myRoutes };
