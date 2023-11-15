import React, { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import PerfCardDetails from "./PerfCardDetails";

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
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div
        key={id}
        className="w-48 min-h-full border-2 grid bg-slate-800 text-white"
      >
        <img src={img} alt={name} className="w-full h-64 object-cover" />
        <div className="p-1 grid mt-1 gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-sm capitalize font-bold">{name}</h2>
            <button type="button" onClick={openModal}>
              <MdRemoveRedEye />
            </button>
          </div>
          <p className="text-[0.7rem]">{desc}</p>
          <div className="flex  items-center">
            <h4 className="text-xl">${price}</h4>
            <div className=" flex flex-col ml-auto">
              <p className="text-[0.6rem]">Add to Cart</p>
              <div className="flex gap-1 text-lg font-semibold items-center justify-center">
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
      <PerfCardDetails
        isOpen={isOpen}
        closeModal={closeModal}
        name={name}
        img={img}
        price={price}
        desc={desc}
      />
    </>
  );
};

export default PerfCard;
