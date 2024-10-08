import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order, Restaurant } from '../../pages/Home'

type CartState = {
  items: Restaurant[]
  isOpen: boolean
  order: Order[]
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  order: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Order>) => {
      const pedido = state.order.find((item) => item.id === action.payload.id)

      if (!pedido) {
        state.order.push(action.payload)
      } else {
        alert('O pedido já esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.order = state.order.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.order = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
