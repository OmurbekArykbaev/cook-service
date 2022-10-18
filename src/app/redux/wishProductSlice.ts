import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFood } from "../types"

interface InitState {
  wishlist: IFood[]
}

const initialState: InitState = {
  wishlist: [],
}

export const wishProductsSlice = createSlice({
  name: "WishProducts",
  initialState,
  reducers: {
    addWishFood: (state, action: PayloadAction<IFood>) => {
      state.wishlist.push(action.payload)
    },
    removeWishFood: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const { addWishFood, removeWishFood } = wishProductsSlice.actions

export default wishProductsSlice.reducer
