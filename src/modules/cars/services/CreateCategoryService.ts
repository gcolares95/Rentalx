// Service responsável por criar uma Categoria

// Dentro do constructor recebemos a interface que será usada

import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {

  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    // Validação se a categoria já exista
    if (categoryAlreadyExists) {
      throw new Error("Category already Exists!");
    }
  
    this.categoriesRepository.create({name, description});
  }
}

export {CreateCategoryService }