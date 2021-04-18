import { AuthUnionType, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/auth.actions";
export interface AuthState {
  register: {
    loaded: boolean,
    success: boolean
  }
}
const initialState:AuthState = {
  register: {
    loaded:false,
    success: false
  }
}
export default function authReducer(state = initialState, action: AuthUnionType) {
  switch(action.type) {
    case REGISTER: 
      return {
        ...state,
        register: {
          loaded: false,
          success: false
        }
      }
    case REGISTER_SUCCESS: 
      return {
        ...state,
        register: {
          loaded: true,
          success: true
        }
      }
    case REGISTER_FAIL: 
      return {
        ...state,
        register: {
          loaded: true,
          success: false,
          message: action.message
        }
      }
    default:
      return state
  }
}