import { combineReducers, configureStore } from "@reduxjs/toolkit"
import allFoodSlice from "../pages/Home/allFoodSlice"
import { foodsApi } from "../services/food"
import getCategorySlice from "../components/Category/categorySlice"
import userSlice from "./userSlice"
import { persistReducer, persistStore } from "redux-persist"

import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  allFoodData: allFoodSlice,
  getAllCategories: getCategorySlice,
  userPofile: userSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
