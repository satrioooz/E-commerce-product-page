import React, { useEffect, useState } from "react";
import { Data } from "../Data/Data";
import { Images } from "../Data/Data";
import Minus from "../images/icon-minus.svg";
import Cart from "../images/icon-cart.svg";
import './home.css';
import Plus from "../images/icon-plus.svg";
import { numberWithCommas } from "./Format";
import { useDispatch, useSelector } from "react-redux";

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const ADD_CART = "ADD_CART";

const Home = () => {
  const [selectImage, setSelectImage] = useState(Images[0]);
  const count = useSelector((state) => state.count);
  const product = useSelector((state) => state.Product)
  const price = useSelector((state) => state.price)
  const dispatch = useDispatch();

  const handleImage = (item) => {
      setSelectImage(item.image)
  }

  useEffect(() => {
    console.log(product)
  })


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
    let id = Math.random() + 1
      dispatch({
          type:ADD_CART,
          count,
          payload: {
            "Data": Data.title,
            "id": id,
            "Price": Data.price,
            "Total": Data.price * count,
            "Items": count,
            "Thumb": Data.pic[0].thumbnail
          }

      })
  }

  return (
    <div className="md:container md:mx-auto my-[70px]">
      <div className="flex  justify-between  ">
        <div className="w-[50%] ">
          <img src={selectImage} className="w-[80%] m-auto rounded-lg" />
          <div className="flex justify-center">
            <div className="flex flex-row justify-center my-3 ">
              {Data.pic.map((item, idx) => (
                  <>
                <img
                id="IMAGES"
                  key={idx}
                  onClick={() => handleImage(item)}
                  className={`w-[18%] mx-2 focus:border-orange focus:opacity-60 focus:border-2 rounded-lg bg-black hover:border-orange hover:opacity-60 hover:border-2`}
                  src={item.thumbnail}
                />
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[50%] my-5">
          <h2 className="font-[700] text-orange my-3">SNEAKER COMPANY</h2>
          <h1 className="font-[700] text-[2.5rem] leading-[40px]">Fall Limited Edition Sneakers</h1>
          <p className="text-DarkGrayishBlue my-7 text-[16px] lg:w-[83%]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sale, they’ll whitstand everything
            the weather can offer.
          </p>
              <div className="flex h-[50px] items-center">
          <h1 className="font-[700] lg:text-[1.5rem] md:text-[1.5rem]">${numberWithCommas(price)}</h1>
                  <p className="mx-3 text-orange font-bold bg-paleOrange">50%</p>
              </div>

              <h1 className="line-through text-GrayishBlue font-bold">$250.00</h1>

          {/* TOTAL ITEMS */}
          <div className="flex h-[120px] items-center">
            <div className="flex justify-center bg-LightGrayishBlue w-[30%] h-[40px] rounded-lg">
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
            <div className="text-white mx-3">
               <button
               onClick={handleAdd}
               className="m-auto flex bg-orange py-[8px] px-[50px] rounded-lg  text-White hover:opacity-60">
                <img
                className="mx-2 my-auto w-[13%] "
                  style={{
                    filter: "brightness(2.5)",
                  }}
                  src={Cart}
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
