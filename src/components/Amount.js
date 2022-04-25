import React from "react";
import Minus from "../images/icon-minus.svg";
import Cart from "../images/icon-cart.svg";
import Plus from "../images/icon-plus.svg";
import { numberWithCommas } from "./Format";
import { useDispatch, useSelector } from "react-redux";
import { Data } from "../Data/Data";

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const ADD_CART = "ADD_CART";

const Amount = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    if (count > 1) {
      dispatch({
        type: DECREMENT,
      });
    }
  };

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const handleAdd = () => {
    let id = Math.random() + 1;
    dispatch({
      type: ADD_CART,
      count,
      payload: {
        Data: Data.title,
        id: id,
        Price: Data.price,
        Total: Data.price * count,
        Items: count,
        Thumb: Data.pic[0].thumbnail,
      },
    });
  };

  return (
    <div className="flex lg:gap-3 md:gap-3 xl:gap-3 mt-3 lg:flex-row md:flex-row flex-col h-[120px] items-center">
      <div className="flex w-full  justify-center bg-LightGrayishBlue lg:w-[30%] h-[40px] rounded-lg">
        <div className="m-auto">
          <img src={Minus} className="m-auto" onClick={handleDecrement} />
        </div>
        {/* ITEMS */}
        <div className="m-auto">
          <p>{count}</p>
        </div>

        {/* IMAGE PLUSS */}
        <div className="m-auto">
          <img onClick={handleIncrement} src={Plus} />
        </div>
      </div>
      <div className="text-white w-full flex justify-center text-center my-auto lg:w-[38%]">
        <button
          onClick={handleAdd}
          className="m-auto text-center w-full h-[50px] flex bg-orange lg:h-[45px]  rounded-lg  text-White hover:opacity-60"
        >
            <div className="flex text-center justify-center m-auto">
          <img
            className=" p-1 m-auto "
            style={{
              filter: "brightness(2.5)",
            }}
            src={Cart}
          />
          Add to cart
          </div>
          {/* <span className="text-center p-0"></span> */}
        </button>
      </div>
    </div>
  );
};

export default Amount;
