import { Product } from "../models/product"

export interface ProductState {
  createAt: {
    loaded: boolean,
    success: boolean,
    products: Product[]
  }
  sold: {
    loaded: boolean,
    success: boolean,
    products: Product[]
  }
}
const initialState: ProductState = {
  createAt: {
    loaded: false,
    success: false,
    products: []
  },
  sold: {
    loaded: false,
    success: false,
    products: []
  }
}
export default function categoryReducer (state = initialState, action: ProductUnionType) {
  switch(action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: {
          loaded: false,
          success: false,
          result: []
        }
      }
    case GET_CATEGORY_SUCCESS: 
    return {
      ...state,
      category: {
        loaded: true,
        success: true,
        result: action.payload
      }
    }
    default:
      return state
  }
}