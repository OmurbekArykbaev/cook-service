import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IFood from "../../types/FoodData"

interface InitState {
  allFoods: IFood[]
}

const initialState: InitState = {
  allFoods: [],
}

export const filteredByCategory = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filtered: (state, action: PayloadAction<IFood[]>) => {
      state.allFoods = action.payload
    },
  },
})

export const { filtered } = filteredByCategory.actions

export default filteredByCategory.reducer
