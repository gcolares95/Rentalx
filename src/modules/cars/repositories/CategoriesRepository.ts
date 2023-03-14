import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];  // criando tabela "fake" de Specification

  private static INSTANCE: CategoriesRepository; // Mesmo tipo da nossa classe

  private constructor() {
    this.categories = [];
  }

  // Método que cria uma instância/repassar uma instância já existente
  public static getInstace(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository(); // Cria uma instância somente uma vez
    }

    return CategoriesRepository.INSTANCE;
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