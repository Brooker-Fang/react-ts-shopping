import { AuthUnionType, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS, RESET_SIGNUP, SIGN, SIGN_FAIL, SIGN_SUCCESS } from "../actions/auth.actions";
export interface AuthState {
  register: {
    loaded: boolean,
    success: boolean,
    message: string
  }
  signin: {
    loaded: boolean,
    success: boolean,
    message: string
  }
}
const initialState:AuthState = {
  register: {
    loaded:false,
    success: false,
    message: ''
  },
  signin: {
    loaded:false,
    success: false,
    message: ''
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
    case RESET_SIGNUP:
      return {
        ...state,
        register: {
          loaded:false,
          success: false,
          message: ''
        }
      }
    case SIGN:
      return {
        ...state,
        signin: {
          loaded:false,
          success: false,
          message: ''
        }
      }
    case SIGN_SUCCESS:
      return {
        ...state,
        signin: {
          loaded: true,
          success: true
        }
      }
    case SIGN_FAIL: 
      return {
        ...state,
        signin: {
          loaded: true,
          success: false,
          message: action.message
        }
      }
    default:
      return state
  }
}