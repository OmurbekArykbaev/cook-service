import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IFood from "../../../types/FoodData"
import { IAddressData, IOrders, IUserData } from "../../../types/userProfile"

interface InitState {
  userData: IUserData
  addresses: IAddressData[]
  wishlist: IFood[]
  orders: IOrders[]
  cart: IFood[]
  isAuthorization: boolean
}

const initialState: InitState = {
  userData: { name: "", phone: "" },
  addresses: [],
  wishlist: [],
  orders: [],
  cart: [],
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
    addAddress: (state, action: PayloadAction<IAddressData>) => {},
    addWishFood: (state, action: PayloadAction<IFood>) => {},
    addOrder: (state, action: PayloadAction<IOrders>) => {},
    addFoodInCart: (state, action: PayloadAction<IFood>) => {},
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
