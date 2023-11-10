import React from "react";

const PerfCard = ({
  id,
  name,
  price,
  count,
  desc,
  img,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div>
      <div key={id} id={id} className="w-36 border-2 border-black flex">
        <img src={img} alt={name} className="w-12 object-contain max-h-28" />
        <div className="p-1">
          <h2 className="text-xs capitalize font-bold">{name}</h2>
          <p className="text-[0.4rem]">{desc}</p>
          <div className="flex text-[0.5rem] items-center">
            <h4 className="">${price}</h4>
            <div className="flex gap-1 ml-auto font-semibold">
              <button onClick={onDecrement}>-</button>
              <span>{count}</span>
              <button onClick={onIncrement}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfCard;
