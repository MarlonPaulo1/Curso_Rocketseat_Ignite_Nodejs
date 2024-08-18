import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoryUseCase } from "./listCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController }