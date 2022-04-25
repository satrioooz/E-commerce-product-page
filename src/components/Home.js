import React, { useEffect, useState } from "react";
import { Data } from "../Data/Data";
import { Images } from "../Data/Data";
import Cart from "../images/icon-cart.svg";
import Minus from "../images/icon-minus.svg";
import "./home.css";
import { numberWithCommas } from "./Format";
import { useDispatch, useSelector } from "react-redux";
import Next from "../images/icon-next.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Amount from "./Amount";

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const ADD_CART = "ADD_CART";

const Home = () => {
  const [selectImage, setSelectImage] = useState(Images[0]);
  const count = useSelector((state) => state.count);
  const product = useSelector((state) => state.Product);
  const price = useSelector((state) => state.price);
  const dispatch = useDispatch();

  const handleImage = (item) => {
    setSelectImage(item.image);
  };



  const next = () => {
    Slider.slickNext();
  };
  const previous = () => {
    Slider.slickPrev();
  };

  

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,

  };



  return (
    <div className="md:container md:mx-auto lg:my-[70px]">
      <div className="flex  lg:justify-center  lg:flex-row flex-col sm:p-0 md:p-0 lg:p-0 xl:p-0 p-2">
        <div className="lg:w-[50%] sm:w-[50%] xl:w-[50%] md:w-[50%] w-full ">
          <div className="lg:hidden md:hidden   sm:hidden xl:hidden">
            <Slider {...settings}>
              {Images.map((item, idx) => (
                  <img
                    className="w-[40vh]  mx-auto  lg:hidden md:hidden sm:hidden xl:hidden"
                    src={item}
                    key={idx}
                  />
              ))}
            </Slider>
          </div>
          <img
            src={selectImage}
            className="w-[100%] lg:w-[60%] md-[55%] sm-[55%] xl-[50%] m-auto rounded-lg lg:block md:block sm:block xl:block hidden"
          />

          <div className="flex justify-center">
            <div className="flex flex-row justify-center my-3 ">
              {Data.pic.map((item, idx) => (
                <>
                  <img
                    id="IMAGES"
                    key={idx}
                    onClick={() => handleImage(item)}
                    className={`sm:w-[13%] lg:block md:block sm:block xl:block hidden lg:w-[14] mx-2 focus:border-orange focus:opacity-60 focus:border-2 rounded-lg bg-black hover:border-orange hover:opacity-60 hover:border-2`}
                    src={item.thumbnail}
                  />
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="xl:w-[40%] lg:w-[40%] sm:w-full md:w-[40%] my-1 lg:my-5">
          <h2 className="font-[700] text-orange my-3">SNEAKER COMPANY</h2>
          <h1 className="font-[700] lg:text-[2.5rem] text-[1.9rem] xl:text-[2.5rem] md:text-[2.5rem] leading-[40px]">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-DarkGrayishBlue my-7 text-[16px] w-full xl:w-[83%] md:w-[83%] lg:w-[83%]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sale, they’ll whitstand everything
            the weather can offer.
          </p>
          <div className="flex md:flex-col xl:flex-col justify-between w-full flex-row lg:flex-col">
            <div className="flex text-left justify-start flex-row">
            <h1 className="font-[700] lg:text-[1.5rem] md:text-[1.5rem]">
              ${numberWithCommas(price)}
            </h1>
            <p className="mx-3 text-orange rounded-lg py-[1px] px-[3px] font-bold bg-paleOrange">
              50%
            </p>
            </div>
          <h1  className="bg-slate-300 block lg:text-left md:text-left xl:text-left  text-right w-full  line-through text-GrayishBlue font-bold">$250.00</h1>
          </div>


          {/* TOTAL ITEMS */}
          <Amount/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
