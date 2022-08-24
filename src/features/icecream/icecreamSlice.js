import { cakeActions } from "../cake/cakeSlice";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "ice cream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIcecream--;
    },
    resetIceCream: (state, action) => {
      state.numberOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   //when cake is ordered ice cream count also change
  //   //use extraReducers when we want to do any state change on actions whichr part of other Slice/reducer
  //   ["cake/ordered"]: (state) => {
  //     state.numberOfIcecream--;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numberOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;
