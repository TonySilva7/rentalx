import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';
import { usersRoutes } from './users.routes';

const myRoutes = Router();

myRoutes.use('/categories', categoriesRoutes);
myRoutes.use('/specifications', specificationRoutes);
myRoutes.use('/users', usersRoutes);

export { myRoutes };
