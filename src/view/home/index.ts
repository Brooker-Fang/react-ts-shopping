import {call, Loading, Module, register, SagaGenerator} from "core-fe";
import MainComponent from "./Home";
import {RootState} from "../../type/state";
import { LOADING_PRODUCT_LIST, State } from "./type";
import { ProductAJAXWebService } from "../../API/ProductApi";
const initialState: State = {
  soldList: [],
  hotList: [],
};

class HomeModule extends Module<RootState, "home"> {
  *onEnter(entryComponentProps: {}): SagaGenerator {
    console.log("entry======", entryComponentProps);
    yield* this.getHotProductList();
    yield* this.getSoldProductList()
  }
  @Loading(LOADING_PRODUCT_LIST)
  *getHotProductList(): SagaGenerator {
      try {
        const response = yield* call(ProductAJAXWebService.getList, 'hot');
        this.setState({
          soldList: response.list
        })
      } catch (error) {}
  }
  *getSoldProductList(): SagaGenerator {
      try {
        const response = yield* call(ProductAJAXWebService.getList, 'sold');
        this.setState({
          soldList: response.list
        })
      } catch (error) {}
  }
}

const view = register(new HomeModule("home", initialState));
export const Home = view.attachLifecycle(MainComponent);
