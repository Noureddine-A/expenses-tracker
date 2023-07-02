import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  balance: 1000,
  mon: {
    totalPrice: 0
  }
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    removeFromBalance: (state, action) => {
      state.mon.totalPrice = state.mon.totalPrice - action.payload;
    },
    addMonday: (state, action) => {
      state.mon.totalPrice = state.mon.totalPrice + action.payload;
      state.balance = state.balance - action.payload
    },
  },
});

const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  }
});

export default store;

export const expensesActions = expensesSlice.actions;
