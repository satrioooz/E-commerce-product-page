import React, { useEffect,useState } from "react";
import Logo from "../images/logo.svg";
import Keranjang from "../images/icon-cart.svg";
import Cart from './Cart';
import Avatar from "../images/image-avatar.png";
import { useSelector } from "react-redux";
import {numberWithCommas} from './Format';
import './navbar.css';
const Navbar = () => {
  // const total = useSelector((state) => state.items);
  const [item, setItem] = useState(false);
  const Data = useSelector((state) => state.Product)

  // useEffect(() => {
  //   console.log(total);
  // }, [total]);
  return (
    <>
      <div className="flex lg:justify-between md:justify-between justify-between w-full lg:h-[50px] items-center p-6 ">
        <div className="flex items-center justify-between ">
          <img src={Logo} className="w-full px-3" />
          <ul className="flex items-center  lg:flex-row md:flex-row gap-3 sm:flex-row flex-col">
            <li className="capitalize ">
              <a className="text-DarkGrayishBlue" href="#">
                collections
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue after:text-darkBlue" href="#">
                men
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue" href="#">
                women
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue" href="#">
                about
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>

        <div id="right" className="flex items-center  ">
          <img onClick={() => {
            setItem(!item)
            console.log(item);
            }} id='keranjang' className="w-full mx-7 cursor-pointer" src={Keranjang} />

            {Data.map((item) => (
          item.Items > 0 && (
            <span style={{padding:'1px 3px'}} className="text-White bg-orange text-xs  rounded absolute right-[80px] top-2">{item.Items}</span>
            )
            ))}
        {/* <div className="w-full "> */}
          <img  className="w-[40px] hover:rounded-full hover:border-orange hover:border-2 outline-none" src={Avatar} />
        {/* </div> */}
        {item &&(
      <Cart/>          
        )} 
        </div>
      </div>
    </>
  );
};

export default Navbar;
