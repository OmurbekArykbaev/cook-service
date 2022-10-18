import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IOrders, IProductInCart, IUserData } from "../types"

interface InitState {
  userData: IUserData

  orders: {
    orderList: IOrders[]
    currentOrder: IOrders[]
  }

  isAuthorization: boolean
}

const initialState: InitState = {
  userData: { name: "", phone: "" },

  orders: {
    orderList: [],
    currentOrder: [],
  },

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

    editUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload
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
  },
})

export const {
  getAuthorization,
  editUserData,

  addOrder,
  changeStatusOrder,
} = userSlice.actions

export default userSlice.reducer
