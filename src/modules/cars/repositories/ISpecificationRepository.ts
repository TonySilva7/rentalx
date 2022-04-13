import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<Specification>;

  findByName(name: string): Promise<Specification | undefined>;
}

export { ICreateSpecificationDTO, ISpecificationRepository };
