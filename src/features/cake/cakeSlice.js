//slice sufix should be there in the file name
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numberOfCake: 10,
  toppings: 5,
};

//this will genrate actions and reducers
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    //keys are the actions
    ordered: (state) => {
      state.numberOfCake--;
      state.toppings--;
    },
    restocked: (state, action) => {
      state.numberOfCake += action.payload.numberOfCake;
      state.toppings += action.payload.toppings;
    },
  },
});

//exports reducers and actions
export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
