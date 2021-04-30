/* 
  注册
*/
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const RESET_SIGNUP = 'RESET_SIGNUP'
export interface RegisterPayload {
  email: string
  name: string
  password: string
}
export interface RegisterAction {
  type: typeof REGISTER
  payload: RegisterPayload
}
export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS
}
export interface RegisterFailAction {
  type: typeof REGISTER_FAIL
  message: string
}
export interface ResetSignUpAction {
  type: typeof RESET_SIGNUP
}
export const register = (payload: RegisterPayload): RegisterAction => ({
  type: REGISTER,
  payload,
})
export const registerSuccess = (): RegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
})
export const registerFail = (message: string): RegisterFailAction => ({
  type: REGISTER_FAIL,
  message,
})
export const resetSignUp = (): ResetSignUpAction => ({
  type: RESET_SIGNUP,
})

/* 
  登录
*/
export const SIGN = 'SIGN'
export const SIGN_SUCCESS = 'SIGN_SUCCESS'
export const SIGN_FAIL = 'SiGN_FAIL'

export interface SigninPayLoad {
  name: string
  email: string
  password: string
}
export interface SigninAction {
  type: typeof SIGN
  payload: SigninPayLoad
}
export const signin = (payload: SigninPayLoad): SigninAction => ({
  type: SIGN,
  payload,
})

export interface SigninSuccessAction {
  type: typeof SIGN_SUCCESS
}
export const signinSuccess = (): SigninSuccessAction => ({
  type: SIGN_SUCCESS,
})

export interface SigninFailAction {
  type: typeof SIGN_FAIL
  message: string
}
export const signinFail = (message: string): SigninFailAction => ({
  type: SIGN_FAIL,
  message,
})
export type AuthUnionType = RegisterAction | RegisterSuccessAction | RegisterFailAction | ResetSignUpAction | SigninFailAction | SigninSuccessAction | SigninAction
