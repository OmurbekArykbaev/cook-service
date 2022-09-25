import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IFood from "../types/FoodData"
import {
  IAddressData,
  IOrders,
  IProductInCart,
  IUserData,
  StatusOrder,
} from "../types/userProfile"

interface InitState {
  userData: IUserData
  addresses: IAddressData[]
  wishlist: IFood[]
  orders: IOrders[]
  cartProducts: IProductInCart[]
  isAuthorization: boolean
}

const initialState: InitState = {
  userData: { name: "", phone: "" },
  addresses: [],
  wishlist: [],
  orders: [],
  cartProducts: [],
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

    addOrder: (state, action: PayloadAction<IOrders>) => {
      state.orders.push(action.payload)
    },

    changeStatusOrder: (
      state,
      action: PayloadAction<{
        status: "current" | "delivered" | "rejected"
        id: number
      }>
    ) => {
      state.orders.forEach((item) => {
        if (item.id === action.payload.id) {
          item.status = action.payload.status
        }
      })
    },

    addFoodInCart: (state, action: PayloadAction<IProductInCart>) => {
      state.cartProducts.push({ ...action.payload, quantityProduct: 1 })
    },

    removeFoodInCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      )
    },

    changeCountProductInCart: (
      state,
      action: PayloadAction<{ id: string; quan: number }>
    ) => {
      state.cartProducts.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantityProduct = action.payload.quan
        }
      })
    },
  },
})

export const {
  getAuthorization,
  addAddress,
  addFoodInCart,
  removeFoodInCart,
  addOrder,
  changeStatusOrder,
  addWishFood,
  changeCountProductInCart,
} = userSlice.actions

export default userSlice.reducer
