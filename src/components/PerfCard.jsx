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
    <div
      key={id}
      className="w-48 min-h-full border-2 grid bg-slate-800 text-white"
    >
      <img src={img} alt={name} className="w-full h-full object-cover" />
      <div className="p-1 grid mt-1 gap-2">
        <h2 className="text-sm capitalize font-bold">{name}</h2>
        <p className="text-[0.7rem]">{desc}</p>
        <div className="flex  items-center">
          <h4 className="">${price}</h4>
          <div className=" flex flex-col ml-auto">
            <p className="text-[0.4rem]">Add to Cart</p>
            <div className="flex gap-1 font-semibold items-center justify-center">
              <button className="button" onClick={onDecrement}>
                -
              </button>
              <span>{count}</span>
              <button className="button" onClick={onIncrement}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfCard;
