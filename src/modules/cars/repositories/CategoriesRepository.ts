import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

// "Banco" em memória
class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];  // criando tabela "fake" de Specification

  constructor() {
    this.categories = [];
  }

  // Método para cadastrar categoria
  create({name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
  
    this.categories.push(category);
  }

  // Método para listar as categorias
  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository };