import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// Instanciar repository e useCase para utilizar nas rotas

const categoryRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }