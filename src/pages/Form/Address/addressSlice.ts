import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IAddressData {
  street: string
  houseNumber: string
  entrance?: string
  floor?: string
  flatOffice?: string
  callDoor?: string
  comment?: string
}

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
    addAddressData: (state, action: PayloadAction<IAddressData[]>) => {
      state.addressData = action.payload
    },
  },
})

export const { addAddressData } = addressSlice.actions

export default addressSlice.reducer
