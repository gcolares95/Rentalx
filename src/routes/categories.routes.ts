import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// Rota para criar categoria
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({name, description});

  return response.status(201).send();
});

// Rota para listar categorias
categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRoutes }