import React from "react";
import { numberWithCommas } from "./Format";
import { useSelector,useDispatch } from "react-redux";
import IconDelete from '../images/icon-delete.svg';
import './navbar.css';

export const DELETE = "DELTE_CART"

const Cart = () => {



    const dispatch = useDispatch();
    const Data = useSelector((state) => state.Product);
  return (
    <>
      <div className=" ">
    <div className="section-hover">
      <div className="text-card">
        <h1>Cart</h1>
      </div>
      <div className="horizontal "></div>
      <div className="w-full m-auto">
      {Data.length === 0 &&<div className="my-auto block w-full bg-slate-500"> <p className="font-bold text-DarkGrayishBlue block m-auto">You cart is empty</p></div>}

      </div>
      {Data.map((item,idx) => (
          <>
      <div className="flex py-2 " key={idx} >
        <div className="w-[23%]">
        <img className="lg:w-[70%] md:w-[70%] xl:w-[70%] w-[80%] rounded-lg" src={item?.Thumb} />
        </div>
       
        {item !== null && (
          <div className="mx-4  ">
            <p className="text-DarkGrayishBlue">{item?.Data}</p>

            <div className="flex">
              <p className="text-DarkGrayishBlue">
                ${item?.Price}.00
              </p>
              <span className="px-2">x</span>
              <p style={{paddingRight:'4px'}} className="text-DarkGrayishBlue ">{item.Items}</p>
              <p className="font-bold">${item?.Total}.00</p>
            </div>
          </div>
        )}
                  <div className="m-auto">
        <img onClick={() => {
            dispatch({
                type:DELETE,
                payload:item.id
            })
        }} src={IconDelete}/>
            </div>
      </div>
      </>
      ))}
      {Data.length > 0 &&
      <button className="bg-orange w-full h-[50px] rounded-lg text-White text-bold text-[1.2rem]">Checkout</button>
      }
    </div>
    </div>
    </>
  );
};

export default Cart;
