import { Category } from "../model/Category";


// DTO => Data Transfer Object
// Podemos usar para transferir dados da nossa rota para o nosso repositório

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // Método para cadastrar categoria
  create( {name, description }: ICreateCategoryDTO): void {
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
}

export { CategoriesRepository };