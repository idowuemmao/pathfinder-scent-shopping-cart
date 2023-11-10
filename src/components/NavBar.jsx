import React from "react";
import { logo } from "../assets";
import { HiMiniShoppingCart } from "react-icons/hi2";

const NavBar = () => {
  return (
    <header className="w-full border-primary bg-black border-b-[1px] sticky top-0 z-20 flex justify-between items-center p-4 pr-10">
      <img src={logo} alt="logo" className="w-24" />
      <div className="relative">
        <HiMiniShoppingCart className="bg-gradient-to-r from-primary to-yellow-500 p-1 text-white text-3xl" />
        <h2 className="text-primary rounded-sm bg-red-700 absolute -top-2 -right-1 text-[0.65rem] font-semibold px-[2px] h-fit">
          0
        </h2>
      </div>
    </header>
  );
};

export default NavBar;
