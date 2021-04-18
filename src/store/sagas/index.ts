import { all } from "@redux-saga/core/effects";
import authSaga from "./auth.sage";

export default function* rootSaga() {
  yield all([authSaga()])
}