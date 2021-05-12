import { Product } from "../models/product"

export const GET_PRODUCT = "GET_PRODUCT"
export const Get_PRODUCT_SUCCESS = "Get_PRODUCT_SUCCESS"

export interface GetProductAction {
  type: typeof GET_PRODUCT
  sortBy: string
  order: string
  limit: number
}
export interface GetProductSuccessAction {
  type: typeof Get_PRODUCT_SUCCESS,
  payload: Product[]
}
export const getProduct = (
  sortBy: string, 
  order: string = "desc", 
  limit: number = 5)
  : GetProductAction => ({
    type: GET_PRODUCT,
    sortBy,
    order,
    limit
  })

  export const getProductSuccess = (payload: Product[]): GetProductSuccessAction => ({
    type: Get_PRODUCT_SUCCESS,
    payload
  })
  export type ProductUnionType = GetProductAction | GetProductSuccessAction