import { Specification } from '../../model/Specification';
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private constructor() {
    this.specifications = [];
  }
  private specifications: Specification[] = [];
  private static INSTANCE: ISpecificationRepository;

  public static getInstance(): ISpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find((specification) => specification.name === name);

    return specification;
  }
}

export { SpecificationRepository };
