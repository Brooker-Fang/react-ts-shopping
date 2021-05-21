import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { GetProductAction, getProductSuccess, GET_PRODUCT, SearchProductAction, searchProductSuccess, SEARCH_PRODUCT } from "../actions/product.actions";
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
export default function* productSage() {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct)
}