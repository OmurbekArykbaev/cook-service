import {
  setIsOpen,
  addProductInModal,
  changeCountProductInModal,
  changeHotInProductInModal,
  removeProductInModal,
} from "./modalOrderSlice"

import { addAddress, editAddress } from "./addressSlice"
import { addWishFood, removeWishFood } from "./wishProductSlice"
import { addProduct, removeProduct, changeCountProduct } from "./cartSlice"
import { addOrder, changeStatusOrder } from "./orderSlice"

export {
  addAddress,
  editAddress,
  addWishFood,
  removeWishFood,
  addProduct,
  removeProduct,
  changeCountProduct,
  addOrder,
  changeStatusOrder,
  setIsOpen,
  addProductInModal,
  changeCountProductInModal,
  changeHotInProductInModal,
  removeProductInModal,
}
