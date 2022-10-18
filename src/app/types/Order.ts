import { IAddressData } from "./Address"
import { IProductInCart } from "./Cart"

export interface StatusOrder {
  status: "current" | "delivered" | "rejected"
}

export interface IOrders extends StatusOrder {
  id: number
  date: string
  totalSum: number
  deliveryPrice: number
  address?: IAddressData | {}
  foods: IProductInCart[]
}
