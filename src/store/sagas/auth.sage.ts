import axios from "axios";
import { API } from "../../config";
import { REGISTER, RegisterAction, registerFail, registerSuccess, SIGN, SigninAction, signinFail, signinSuccess } from "../actions/auth.actions";
import { put, takeEvery } from 'redux-saga/effects'
// 注册
function* handleRegister(action: RegisterAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(registerSuccess())
  } catch (error) {
    yield put(registerFail(error.response.data.error))
  }
}
// 登录
interface signRes {
  data: object
}
function* handleSignin(action: SigninAction) {
  try {
    let response:signRes = yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    yield put(signinSuccess())
  } catch (error) {
    yield put(signinFail(error.response.data.error))
  }
}
export default function* authSaga() {
  // 注册
  yield takeEvery(REGISTER, handleRegister)
  // 登录
  yield takeEvery(SIGN, handleSignin)
}