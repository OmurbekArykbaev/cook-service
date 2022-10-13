import { PushToast } from "../components/Toast"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IFood from "../types/foodData"
import {
  IAddressData,
  IOrders,
  IProductInCart,
  IUserData,
  StatusOrder,
} from "../types/userProfile"
import { object } from "yup"

interface InitState {
  userData: IUserData
  addresses: IAddressData[]
  wishlist: IFood[]
  orders: {
    orderList: IOrders[]
    currentOrder: IOrders[]
  }
  cartProducts: IProductInCart[]
  isAuthorization: boolean
}

const initialState: InitState = {
  userData: { name: "", phone: "" },
  addresses: [],
  wishlist: [],
  orders: {
    orderList: [],
    currentOrder: [],
  },
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
    removeWishFood: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      )
    },

    addOrder: (state, action: PayloadAction<IOrders>) => {
      state.orders.orderList.push(action.payload)
      state.orders.currentOrder.push(action.payload)
    },

    changeStatusOrder: (
      state,
      action: PayloadAction<{
        status: "current" | "delivered" | "rejected"
        id: number
      }>
    ) => {
      state.orders.orderList.forEach((item) => {
        if (item.id === action.payload.id) {
          item.status = action.payload.status
        }
      })

      state.orders.currentOrder = []
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
  removeWishFood,
  changeCountProductInCart,
} = userSlice.actions

export default userSlice.reducer