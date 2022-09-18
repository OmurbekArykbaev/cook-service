import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IFood from "../types/FoodData"
import {
  IAddressData,
  ICart,
  IOrders,
  IProductCart,
  IUserData,
} from "../types/userProfile"

interface InitState {
  userData: IUserData
  addresses: IAddressData[]
  wishlist: IFood[]
  orders: IOrders[]
  cart: ICart
  isAuthorization: boolean
}

const initialState: InitState = {
  userData: { name: "", phone: "" },
  addresses: [],
  wishlist: [],
  orders: [],
  cart: { products: [], quantity: 0, totalSum: 0 },
  isAuthorization: false,
}

export const userSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    getAuthorization: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload
      state.isAuthorization = true
    },
    addAddress: (state, action: PayloadAction<IAddressData>) => {
      state.addresses.push(action.payload)
    },

    addWishFood: (state, action: PayloadAction<IFood>) => {
      state.wishlist.push(action.payload)
    },

    addOrder: (state, action: PayloadAction<IOrders>) => {},

    addFoodInCart: (state, action: PayloadAction<IProductCart>) => {
      const { product, totalSum, quantity } = action.payload
      state.cart.products.push({ product, totalSum, quantity })
    },
  },
})

export const {
  getAuthorization,
  addAddress,
  addFoodInCart,
  addOrder,
  addWishFood,
} = userSlice.actions

export default userSlice.reducer
