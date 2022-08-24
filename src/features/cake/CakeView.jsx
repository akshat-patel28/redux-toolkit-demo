import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";
export const CakeView = () => {
  const numberOfCake = useSelector((state) => state.cake.numberOfCake);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number Of Cakes - {numberOfCake} </h2>

      <button
        disabled={numberOfCake > 0 ? false : true}
        onClick={() => {
          dispatch(cakeActions.ordered());
        }}
      >
        Order cake
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(cakeActions.restocked({ numberOfCake: value, toppings: 5 }));
        }}
      >
        Restock cakes
      </button>
    </div>
  );
};
