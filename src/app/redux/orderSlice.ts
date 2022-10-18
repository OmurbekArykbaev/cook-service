import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IOrders } from "../types"

interface InitState {
  orders: {
    orderList: IOrders[]
    currentOrder: IOrders[]
  }
}

const initialState: InitState = {
  orders: {
    orderList: [],
    currentOrder: [],
  },
}

export const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
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

export const { addOrder, changeStatusOrder } = orderSlice.actions

export default orderSlice.reducer
