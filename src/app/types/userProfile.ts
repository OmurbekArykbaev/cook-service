import IFood from "./foodData"

export interface IAddressData {
  id: number
  linkTo?: string
  street: string
  houseNumber: string
  entrance?: string
  floor?: string
  flatOffice?: string
  callDoor?: string
  comment?: string
}

export interface IUserData {
  name: string
  phone: string
}

export interface IProductInCart extends IFood {
  quantityProduct: number
}

export interface StatusOrder {
  status: "current" | "delivered" | "rejected"
}

export interface IOrders extends StatusOrder {
  id: number
  date: string
  totalSum: number
  address: IAddressData | {}
  foods: IProductInCart[]
}
