import axios from "axios";
import { API } from "../../config";
import { REGISTER, RegisterAction, registerFail, registerSuccess } from "../actions/auth.actions";
import { put, takeEvery } from 'redux-saga/effects'
function* handleRegister(action: RegisterAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(registerSuccess())
  } catch (error) {
    yield put(registerFail(error.response.data.error))
  }
}
export default function* authSaga() {
  yield takeEvery(REGISTER, handleRegister)
}