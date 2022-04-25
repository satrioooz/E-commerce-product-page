import React, { useEffect,useState } from "react";
import Logo from "../images/logo.svg";
import Keranjang from "../images/icon-cart.svg";
import Cart from './Cart';
import Avatar from "../images/image-avatar.png";
import { useSelector } from "react-redux";
import {numberWithCommas} from './Format';
import './navbar.css';
import Menu from '../images/icon-menu.svg';
import Close from '../images/icon-close.svg';

const Navbar = () => {
  const [item, setItem] = useState(false);
  const [bar ,setBar] = useState(false);
  const Data = useSelector((state) => state.Product)

  return (
    <>
      <div className="flex lg:justify-between md:justify-between justify-between  w-full lg:h-[70px] items-center p-6 ">
        <div className="flex items-center justify-between ">
          <div className="md:hidden xl:hidden lg:hidden block  w-full" onClick={() => setBar(!bar)}>
            {bar ?
            // <p>hel</p>
          <img src={Close} className="w-full px-0 lg:hidden md:hidden block" />
          :
          <img src={Menu} className="w-full px-0  xl:hidden lg:hidden md:hidden block" />
            }
          </div>
          <img src={Logo} className="w-full px-3" />
          <ul className={bar ? "mobile" : "desktop"}>
            <li className="capitalize ">
              <a className="text-DarkGrayishBlue hover:text-darkBlue" href="#">
                collections
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue hover:text-darkBlue" href="#">
                men
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue hover:text-darkBlue" href="#">
                women
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue hover:text-darkBlue" href="#">
                about
              </a>
            </li>
            <li>
              <a className="text-DarkGrayishBlue hover:text-darkBlue" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>

        <div id="right" className="flex items-center  ">
          <img onClick={() => {
            setItem(!item)
            }} id='keranjang' className="w-full mx-7 cursor-pointer" src={Keranjang} />

            {Data.map((item,idx) => (
          item.Items > 0 && (
            <span key={idx} style={{padding:'1px 3px'}} className="text-White bg-orange text-xs  rounded absolute right-[82px] md:top-5 lg:top-5 xl-top-5 top-6 sm:top-5">{item.Items}</span>
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
