import React, { useState } from "react";
import ShopItemData from "./ShopItemDb";

const Hero = () => {
  const [count, setCount] = useState(0);
  const increment = (id) => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };
  const decrement = (id) => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };

  const shopItems = ShopItemData.map((item) => (
    <div key={item.id} className="w-36 border-2 border-black flex">
      <img
        src={item.img}
        alt={item.name}
        className="w-12 object-contain max-h-28"
      />
      <div className="p-1">
        <h2 className="text-xs capitalize font-bold">{item.name}</h2>
        <p className="text-[0.4rem]">{item.desc}</p>
        <div className="flex text-[0.5rem] items-center">
          <h4 className="">${item.price}</h4>
          <div className="flex gap-1 ml-auto font-semibold">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {shopItems}
    </div>
  );
};

export default Hero;
