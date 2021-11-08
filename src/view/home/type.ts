import { Product } from "../../store/models/product";

export const LOADING_PRODUCT_LIST = "product/list";

export interface State {
    soldList: Product[];
    hotList: Product[];
}
