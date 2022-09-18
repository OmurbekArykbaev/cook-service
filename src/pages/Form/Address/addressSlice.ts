import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAddressData } from "../../../types/address"

interface InitState {
  addressData: IAddressData[]
}

const initialState: InitState = {
  addressData: [],
}

export const addressSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    addAddressData: (state, action: PayloadAction<IAddressData>) => {
      state.addressData.push(action.payload)
    },
  },
})

export const { addAddressData } = addressSlice.actions

export default addressSlice.reducer
