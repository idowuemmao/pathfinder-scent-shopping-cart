import React, { useEffect } from "react";
import { logo } from "../assets";
import { HiMiniShoppingCart } from "react-icons/hi2";

const NavBar = ({ totalCount, setTotalCount }) => {
  useEffect(() => {
    const storedTotalCountOthers =
      localStorage.getItem("totalCountOthers") || "0";
    const storedTotalCountPerfs =
      localStorage.getItem("totalCountPerfs") || "0";

    const totalCountOthers = parseInt(storedTotalCountOthers, 10);
    const totalCountPerfs = parseInt(storedTotalCountPerfs, 10);

    const overallTotalCount = totalCountOthers + totalCountPerfs;

    setTotalCount(overallTotalCount);
  }, [setTotalCount, totalCount]);

  return (
    <header className="w-full border-primary bg-black border-b-[1px] flex justify-between items-center p-4 pr-10">
      <a href="/">
        <img src={logo} alt="logo" className="w-24" />
      </a>
      <a
        href="/"
        className="text-red-800 bg-primary rounded-full p-1 px-3 font-bold text-xs shadow-lg"
        onClick={() => localStorage.clear()}
      >
        Clear Cart
      </a>
      <div className="relative">
        <HiMiniShoppingCart className="bg-gradient-to-r from-primary to-yellow-500 p-1 text-white text-3xl" />
        <h2 className="text-primary rounded-sm bg-red-700 absolute -top-2 -right-1 text-[0.65rem] font-semibold px-[2px] h-fit">
          {totalCount}
        </h2>
      </div>
    </header>
  );
};

export default NavBar;
