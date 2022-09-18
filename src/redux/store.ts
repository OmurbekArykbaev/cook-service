import { configureStore } from "@reduxjs/toolkit"
import allFoodSlice from "../pages/Home/allFoodSlice"
import { foodsApi } from "../services/food"
import getCategorySlice from "../components/Category/categorySlice"
import userSlice from "../pages/Form/Login/userSlice"
import addressSlice from "../pages/Form/Address/addressSlice"
// const persistConfig = {
// key: "root",
// storage,
// }

// const persistedReducer = persistReducer(persistConfig, {})

export const store = configureStore({
  reducer: {
    allFoodData: allFoodSlice,
    getAllCategories: getCategorySlice,
    userPofile: userSlice,
    addresses: addressSlice,

    [foodsApi.reducerPath]: foodsApi.reducer,
  },
})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
