import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// Rota para criar categoria
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

   const createCategoryService =new CreateCategoryService(categoriesRepository);
   createCategoryService.execute({ name, description });

  return response.status(201).send();
});

// Rota para listar categorias
categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRoutes }