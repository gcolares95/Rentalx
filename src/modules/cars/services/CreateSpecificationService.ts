// Service responsável por criar uma specification
// Dentro do constructor recebemos a interface que será usada

import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already Exists!");
    }

    this.specificationsRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationService }
