import { Router } from 'express';

import { specificationController } from '../modules/cars/useCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return specificationController.handle(request, response);
});

export { specificationRoutes };
