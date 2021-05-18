import { GET_PRODUCT, Get_PRODUCT_SUCCESS, ProductUnionType } from "../actions/product.actions"
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
export default function productReducer (state = initialState, action: ProductUnionType) {
  switch(action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        [action.sortBy]: {
          loaded: false,
          success: false,
          products: []
        }
      }
    case Get_PRODUCT_SUCCESS: 
    return {
      ...state,
      [action.sortBy]: {
        loaded: false,
        success: false,
        products: action.payload
      }
    }
    default:
      return state
  }
}