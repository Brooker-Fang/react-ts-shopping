export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"
export const RESET_SIGNUP = 'RESET_SIGNUP'
export interface RegisterPayload {
  email: string
  name: string
  password: string
}
export interface RegisterAction {
  type: typeof REGISTER,
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
export const register = (payload: RegisterPayload):RegisterAction => ({
  type: REGISTER,
  payload
})
export const registerSuccess = ():RegisterSuccessAction => ({
  type: REGISTER_SUCCESS
})
export const registerFail = (message:string):RegisterFailAction => ({
  type: REGISTER_FAIL,
  message
})
export const resetSignUp = ():ResetSignUpAction => ({
  type: RESET_SIGNUP
})
export type AuthUnionType = RegisterAction | RegisterSuccessAction | RegisterFailAction | ResetSignUpAction