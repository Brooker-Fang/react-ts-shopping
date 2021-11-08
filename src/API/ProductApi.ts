import {ProductListResponse} from "./type/index";
import {ajax} from "core-fe";

export class ProductAJAXWebService {
    static getList(sortBy: string, order: string = 'desc', limit: number = 5): Promise<ProductListResponse> {
        return ajax("GET", "/ajax/product", {}, null);
    }
}
