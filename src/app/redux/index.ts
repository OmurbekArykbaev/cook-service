import {
  setIsOpen,
  addProductInModal,
  changeCountProductInModal,
  changeHotInProductInModal,
  removeProductInModal,
} from "./modalOrderSlice"

import { addAddress, editAddress, removeAddress } from "./addressSlice"
import { addWishFood, removeWishFood } from "./wishProductSlice"
import { addProduct, removeProduct, changeCountProduct } from "./cartSlice"
import { addOrder, changeStatusOrder } from "./orderSlice"
import { fetchAllFoods, filterByCategory } from "./getProductsSlice"
import { getCategories } from "../redux/getCategorySlice"
import { getAuthorization, editUserData, logOut } from "./userSlice"

export {
  getAuthorization,
  editUserData,
  logOut,
  addAddress,
  editAddress,
  removeAddress,
  addWishFood,
  removeWishFood,
  addProduct,
  removeProduct,
  changeCountProduct,
  addOrder,
  changeStatusOrder,
  setIsOpen,
  addProductInModal,
  fetchAllFoods,
  getCategories,
  filterByCategory,
  changeCountProductInModal,
  changeHotInProductInModal,
  removeProductInModal,
}
