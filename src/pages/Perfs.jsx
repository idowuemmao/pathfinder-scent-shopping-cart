import React, { useEffect, useMemo, useState } from "react";
import ShopItemData from "./ShopItemDb";
import PerfCard from "./ItemCard";
import { HiArrowLeft } from "react-icons/hi2";

const Perfs = ({ setTotalCount }) => {
  const perfDetails = useMemo(() => {
    return ShopItemData.items.find((item) => item.type === "perfume");
  }, []);
  const [perfItems, setPerfItems] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("perfItems"));

    if (storedItems) {
      setPerfItems(storedItems);
    } else {
      setPerfItems(perfDetails.details);
    }
  }, []);
  const handleIncrement = (itemId) => {
    const search = perfItems.findIndex((item) => item.id === itemId);
    if (search !== -1) {
      const updatedItems = [...perfItems];
      updatedItems[search] = {
        ...perfItems[search],
        rating: {
          ...perfItems[search].rating,
          count: perfItems[search].rating.count + 1,
        },
      };
      setPerfItems(updatedItems);
      updateLocalStorage(updatedItems);
      calculation(updatedItems);
    }
  };
  const handleDecrement = (itemId) => {
    const search = perfItems.findIndex((item) => item.id === itemId);
    if (search >= 0 && perfItems[search].rating.count > 0) {
      const updatedItems = [...perfItems];
      updatedItems[search] = {
        ...perfItems[search],
        rating: {
          ...perfItems[search].rating,
          count: perfItems[search].rating.count - 1,
        },
      };
      setPerfItems(updatedItems);
      updateLocalStorage(updatedItems);
      calculation(updatedItems);
    }
  };
  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem("perfItems", JSON.stringify(updatedItems));
  };
  const calculation = (updatedItems) => {
    const totalCount = updatedItems.reduce(
      (total, item) => total + item.rating.count,
      0
    );
    setTotalCount(totalCount);
    localStorage.setItem("totalCountPerfs", totalCount.toString());
  };

  return (
    <div className="w-full">
      <a
        href="/"
        className="text-white p-5 text-sm  w-full flex items-center justify-center"
      >
        <HiArrowLeft />
        Back to Home Page
      </a>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {perfItems.map((item) => (
          <PerfCard
            key={item.id}
            name={item.title}
            count={item.rating.count}
            price={item.price}
            img={item.img}
            desc={item.description}
            onIncrement={() => handleIncrement(item.id)}
            onDecrement={() => handleDecrement(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Perfs;
