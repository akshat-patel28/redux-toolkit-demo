import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icecreamActions } from "./icecreamSlice";

export const IcecreamView = () => {
  const numberOfIcecream = useSelector(
    (state) => state.icecream.numberOfIcecream
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number Of Icecream - {numberOfIcecream} </h2>

      <button
        disabled={numberOfIcecream > 0 ? false : true}
        onClick={() => {
          dispatch(icecreamActions.ordered());
        }}
      >
        Order Icecream
      </button>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(icecreamActions.resetIceCream(value));
        }}
      >
        Restock Icecream
      </button>
    </div>
  );
};
