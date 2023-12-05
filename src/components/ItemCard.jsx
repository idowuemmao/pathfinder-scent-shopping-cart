import React, { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import ItemCardDetails from "./ItemCardDetails";
import PropTypes from "prop-types";

const ItemCard = ({
  id,
  name,
  price,
  count,
  desc,
  img,
  onIncrement,
  onDecrement,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <img src={img} alt={name} className="w-full h-64 object-fill" />
        <div className="p-1 grid mt-1 gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-sm capitalize font-bold">
              {name.substring(0, 21)}...
            </h2>
            {/* <button type="button" onClick={openModal}>
              <MdRemoveRedEye />
            </button> */}
          </div>
          <p className="text-[0.7rem]">
            {desc.substring(0, 40)}...{" "}
            <button
              onClick={openModal}
              className="italic ml-2 underline text-[0.65rem]"
            >
              See more
            </button>
          </p>
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
      <ItemCardDetails
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

ItemCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string, // Make sure to include this line
  category: PropTypes.string,
  img: PropTypes.string,
  count: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

export default ItemCard;
