import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// Rota para criar categoria
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

// Rota para listar categorias
categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRoutes }