import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { getCategorySuccess, GET_CATEGORY } from "../actions/category.actions";
import { Category } from '../models/category'
interface res {
  data: Category[]
}
function* handleGetCategory() {
  let res:res = yield axios.get<Category[]>(`${API}/categories`)
  yield put(getCategorySuccess(res.data))
}
export default function* categorySage() {
  yield takeEvery(GET_CATEGORY, handleGetCategory)
}