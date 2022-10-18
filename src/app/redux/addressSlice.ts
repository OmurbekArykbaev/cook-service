import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAddressData } from "../types"

interface InitState {
  addresses: IAddressData[]
}

const initialState: InitState = {
  addresses: [],
}

export const addressSlice = createSlice({
  name: "Address",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<IAddressData>) => {
      state.addresses.push(action.payload)
    },
    editAddress: (
      state,
      action: PayloadAction<{ data: IAddressData; id: number }>
    ) => {
      const {
        street,
        houseNumber,
        entrance,
        callDoor,
        comment,
        flatOffice,
        floor,
      } = action.payload.data
      state.addresses.forEach((item) => {
        if (item.id === action.payload.id) {
          item.street = street
          item.callDoor = callDoor
          item.comment = comment
          item.entrance = entrance
          item.houseNumber = houseNumber
          item.flatOffice = flatOffice
          item.floor = floor
        }
      })
    },
  },
})

export const { addAddress, editAddress } = addressSlice.actions

export default addressSlice.reducer
