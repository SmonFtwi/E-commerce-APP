import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
  totalCount: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id } = action.payload;
      if (state.products[id]) {
        state.products[id] += 1;
      } else {
        state.products[id] = 1;
      }
      state.totalCount = Object.values(state.products).reduce((a, b) => a + b, 0);
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      if (state.products[id]) {
        state.products[id] -= 1;
        state.totalCount = Object.values(state.products).reduce((a, b) => a + b, 0);
      }
    },
    incrementByAmount: (state, action) => {
      const { id, amount } = action.payload;
      if (state.products[id]) {
        state.products[id] += amount;
      } else {
        state.products[id] = amount;
      }
      state.totalCount = Object.values(state.products).reduce((a, b) => a + b, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
