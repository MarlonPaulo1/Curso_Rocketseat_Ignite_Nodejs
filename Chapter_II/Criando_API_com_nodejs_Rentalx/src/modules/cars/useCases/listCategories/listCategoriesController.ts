import { Request, Response } from "express";
import { ListCategoryUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoryUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCase.execute()

        return response.json(all)
    }
}

export { ListCategoriesController }