import { Specification } from '../model/Specification';
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[] = [];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationRepository };
