// Service responsável por criar uma Categoria
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [X] Definir um tipo de retorno
 * [x] Alterar o retorno de erro
 * [X] Acessar o repositório
 */

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