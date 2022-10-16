import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProductInCart } from "../types/userProfile"

interface InitState {
  isOpen: boolean
  product: IProductInCart[]
}

type changeCount = {
  id: string
  quan: number
}

type changeHot = {
  id: string
  isHot: boolean
}

const initialState: InitState = {
  isOpen: false,
  product: [],
}

export const pushUpOrder = createSlice({
  name: "PushUpOrderState",
  initialState,

  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },

    addProductInModal: (state, action: PayloadAction<IProductInCart>) => {
      state.product.push(action.payload)
    },

    changeCountProductInModal: (state, action: PayloadAction<changeCount>) => {
      state.product.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantityProduct = action.payload.quan
        }
      })
    },

    removeProductInModal: (state) => {
      state.product = []
    },

    changeHotInProductInModal: (state, action: PayloadAction<changeHot>) => {
      state.product.forEach((item) => {
        if (item.id === action.payload.id) {
          item.isHot = action.payload.isHot
        }
      })
    },
  },
})

export const {
  setIsOpen,
  addProductInModal,
  removeProductInModal,
  changeCountProductInModal,
  changeHotInProductInModal,
} = pushUpOrder.actions

export default pushUpOrder.reducer
