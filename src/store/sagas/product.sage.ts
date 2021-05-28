import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { FilterProductAction, filterProductSuccess, FILTER_PRODUCT, GetProductAction, getProductSuccess, GET_PRODUCT, SearchProductAction, searchProductSuccess, SEARCH_PRODUCT } from "../actions/product.actions";
import { Product } from "../models/product";
interface res {
  data: Product[]
}
function* handleGetProduct({sortBy, order, limit}: GetProductAction) {
  try {
    let res:res = yield axios.get<Product[]>(`${API}/products`, {
      params: { sortBy, order, limit }
    })
    yield put(getProductSuccess(res.data, sortBy))
  } catch (error) {
  }
}
function* handleSearchProduct({payload: { search, category}}: SearchProductAction) {
  let res:res = yield axios.get(`${API}/products/search`, {
    params: {
      search,
      category
    }
  })
  yield put(searchProductSuccess(res.data))
}
function* handlerFilterProduct(action: FilterProductAction) {
  let res:{data:{size: number, data: Product[]}} = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(filterProductSuccess(res.data, action.payload.skip))
}
export default function* productSage() {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
  yield takeEvery(FILTER_PRODUCT, handlerFilterProduct)
}