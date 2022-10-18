import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

import allFoodSlice from "../pages/Home/getFoodSlice"
import getCategorySlice from "../components/Category/categorySlice"
import userSlice from "./userSlice"
import pushUpOrder from "./modalOrderSlice"
import addressSlice from "./addressSlice"
import wishProductsSlice from "./wishProductSlice"
import cartSlice from "./cartSlice"

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["allFoodData", "getAllCategories"],
}

const rootReducer = combineReducers({
  address: addressSlice,
  wishList: wishProductsSlice,
  cart: cartSlice,
  allFoodData: allFoodSlice,
  getAllCategories: getCategorySlice,
  userPofile: userSlice,
  globalChanges: pushUpOrder,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
