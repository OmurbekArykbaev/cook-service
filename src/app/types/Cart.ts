import IFood from "./Product"

export interface IProductInCart extends IFood {
  quantityProduct: number
  isHot?: boolean
}
