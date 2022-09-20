import IFood from "./FoodData"

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

export interface IOrders {
  id: string
  date: string
  totalSum: string
  status: "current" | "delivered" | "rejected"
  foods: IFood[]
}
