import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIceCream = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice Cream
      </button>
    </div>
  );
};
