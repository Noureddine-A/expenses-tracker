import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  balance: 1000,

  days: [
    { day: "mon", totalPrice: 0 },
    { day: "tue", totalPrice: 0 },
    { day: "wed", totalPrice: 0 },
    { day: "thu", totalPrice: 0 },
    { day: "fri", totalPrice: 0 },
    { day: "sat", totalPrice: 0 },
    { day: "sun", totalPrice: 0 },
  ],

  overallPrice: 0,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    addToDay: (state, action) => {
      for (let i = 0; i < state.days.length; i++) {
        if (state.days[i].day === action.payload.day) {
          state.days[i].totalPrice =
            state.days[i].totalPrice + action.payload.price;
          state.balance = state.balance - action.payload.price;
          state.overallPrice = state.overallPrice + action.payload.price;
        }
      }
    },
  },
});

const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
});

export default store;

export const expensesActions = expensesSlice.actions;
