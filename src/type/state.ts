import {State} from "core-fe";
import { Product } from "../store/models/product";
// import {State as ProductState} from "module/product/type";
// import {State as UserState} from "module/user/type";
// import {State as CartState} from "module/cart/type";
export interface RootState extends State {
    app: {
        home: {
            soldList: Array<Product | null>,
            hotList: Array<Product | null>
        };
        // user: UserState;
        // product: ProductState;
        // cart: CartState;
    };
}
