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

export interface ICart {
  products: IProductCart[]
  quantity: number
  totalSum: number
}

export interface IProductCart {
  product: IFood
  quantity: number
  totalSum: number
}

export interface IOrders {
  id: string
  date: string
  totalSum: string
  status: "current" | "delivered" | "rejected"
  foods: IFood[]
}
