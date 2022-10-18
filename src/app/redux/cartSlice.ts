import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProductInCart } from "../types"

interface InitState {
  cartProducts: IProductInCart[]
}

const initialState: InitState = {
  cartProducts: [],
}

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProductInCart>) => {
      state.cartProducts.push(action.payload)
    },

    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      )
    },

    changeCountProduct: (
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

export const { addProduct, removeProduct, changeCountProduct } =
  cartSlice.actions

export default cartSlice.reducer
