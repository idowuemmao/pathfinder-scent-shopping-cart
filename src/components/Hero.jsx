import React, { useRef, useState } from "react";
import ShopItemData from "./ShopItemDb";

const Hero = ({ cart }) => {
  const [count, setCount] = useState(0);
  // const decrement = (id) => {
  //   let selectedItem = id;
  //   let search = count;
  //   setCount((prevCount) => id + 1);
  //   console.log(id);
  // };
  // const increment = (i) => {
  //   setCount((prevCount) => i + 1);
  //   console.log(i);
  // };

  const shopItems = ShopItemData.map(
    ({ id, name, desc, price, initialCount, img }) => (
      <div key={id} className="w-36 border-2 border-black flex">
        <img src={img} alt={name} className="w-12 object-contain max-h-28" />
        <div className="p-1">
          <h2 className="text-xs capitalize font-bold">{name}</h2>
          <p className="text-[0.4rem]">{desc}</p>
          <div className="flex text-[0.5rem] items-center">
            <h4 className="">${price}</h4>
            <div className="flex gap-1 ml-auto font-semibold">
              <button onClick={() => setCount(count + 1)}>-</button>
              {/* <span ref={countRef}>{ search}</span> */}
              <span id={`${id}`}>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {cart}
      {shopItems}
    </div>
  );
};

export default Hero;
