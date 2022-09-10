import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IFood from "../../types/FoodData"

interface InitState {
  allFoods: IFood[]
}

const initialState: InitState = {
  allFoods: [],
}

export const allFoodSlice = createSlice({
  name: "AllFoodInHomePage",
  initialState,
  reducers: {
    fetchAllFoods: (state, action: PayloadAction<IFood[]>) => {
      state.allFoods = action.payload
    },
  },
})

export const { fetchAllFoods } = allFoodSlice.actions

export default allFoodSlice.reducer
