// Interface / Contrato

import { Category } from "../model/Category";

// DTO => Data Transfer Object
// Podemos usar para transferir dados da nossa rota para o nosso repositório

interface ICreateCategoryDTO {
    name: string;
    description: string;
}
  
interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO }