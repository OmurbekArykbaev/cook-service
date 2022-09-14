import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IFood from "../../types/FoodData"

interface InitState {
  allFoods: IFood[]
}

const initialState: InitState = {
  allFoods: [],
}

interface IPayload {
  foods: IFood[]
  filter?: string
}

export const allFoodSlice = createSlice({
  name: "AllFoodInHomePage",
  initialState,
  reducers: {
    fetchAllFoods: (state, action: PayloadAction<IPayload>) => {
      const foods = action.payload.foods
      const filterByCategory = action.payload.filter

      state.allFoods = foods.filter(
        (item) => item.category === filterByCategory
      )
    },
  },
})

export const { fetchAllFoods } = allFoodSlice.actions

export default allFoodSlice.reducer
