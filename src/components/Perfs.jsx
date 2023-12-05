import React, { useEffect, useMemo, useState } from "react";
import ShopItemData from "./ShopItemDb";
import PerfCard from "./ItemCard";
import ItemCard from "./ItemCard";

const Perfs = ({ setTotalCount }) => {
  const perfDetails = useMemo(() => {
    return ShopItemData.items.find((item) => item.type === "perfume");
  }, []);
  // localStorage.clear();
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

    //   ? updateItems.filter((item) => item.count !== 0)
    //   : [];
    // localStorage.setItem("perfItems", JSON.stringify(updateItems));
  };
  const calculation = (updatedItems) => {
    const totalCount = updatedItems.reduce(
      (total, item) => total + item.rating.count,
      0
    );
    setTotalCount(totalCount);
    localStorage.setItem("overallTotalCount", totalCount.toString());
  };
  // console.log(perfItems);

  return (
    <div>
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
