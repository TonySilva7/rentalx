import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = SpecificationRepository.getInstance();
const specificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const specificationController = new CreateSpecificationController(specificationUseCase);

export { specificationController, specificationUseCase };
