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
    <div className="section-hover">
      <div className="text-card">
        <h1>Cart</h1>
      </div>
      <div className="horizontal "></div>
      {Data.length === 0 &&<div> <p className="font-bold text-DarkGrayishBlue m-auto">You cart is empty</p></div>}
      {Data.map((item,idx) => (
          <>
      <div className="flex py-2 " key={idx} >
        <img className="w-[20%] rounded-lg" src={item?.Thumb} />
       
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
            console.log('DELETE')
            dispatch({
                type:DELETE,
                payload:item.id
            })
        }} src={IconDelete}/>
            </div>
      </div>
      </>
      ))}
    </div>
    </>
  );
};

export default Cart;
