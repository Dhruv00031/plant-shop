import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { [id]: { product, qty } }
  totalCount: 0,
  totalPrice: 0,
};

const updateTotals = (state) => {
  let count = 0;
  let price = 0;
  for (const key of Object.keys(state.items)) {
    const it = state.items[key];
    count += it.qty;
    price += it.qty * it.product.price;
  }
  state.totalCount = count;
  state.totalPrice = price;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (state.items[product.id]) return; // already added
      state.items[product.id] = { product, qty: 1 };
      updateTotals(state);
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty += 1;
        updateTotals(state);
      }
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) delete state.items[id];
        updateTotals(state);
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      if (state.items[id]) delete state.items[id];
      updateTotals(state);
    },
    clearCart: (state) => {
      state.items = {};
      updateTotals(state);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
