import React, { useEffect, useState } from "react";
import ShopItemData from "./ShopItemDb";
import PerfCard from "./PerfCard";

const Perfs = ({ setTotalCount }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    } else {
      setItems(ShopItemData);
    }
  }, []);
  const handleIncrement = (itemId) => {
    const search = items.findIndex((item) => item.id === itemId);
    if (search !== -1) {
      const updatedItems = [...items];
      updatedItems[search] = {
        ...items[search],
        count: items[search].count + 1,
      };
      setItems(updatedItems);
      updateLocalStorage(updatedItems);
      calculation(updatedItems);
    }
  };
  const handleDecrement = (itemId) => {
    const search = items.findIndex((item) => item.id === itemId);
    if (search >= 0 && items[search].count > 0) {
      const updatedItems = [...items];
      updatedItems[search] = {
        ...items[search],
        count: items[search].count - 1,
      };
      setItems(updatedItems);
      updateLocalStorage(updatedItems);
      calculation(updatedItems);
    }
  };
  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem("items", JSON.stringify(updatedItems));

    //   ? updateItems.filter((item) => item.count !== 0)
    //   : [];
    // localStorage.setItem("items", JSON.stringify(updateItems));
  };
  const calculation = (updatedItems) => {
    const totalCount = updatedItems.reduce(
      (total, item) => total + item.count,
      0
    );
    setTotalCount(totalCount);
    localStorage.setItem("totalCount", totalCount.toString());
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {items.map((item) => (
        <PerfCard
          key={item.id}
          name={item.name}
          count={item.count}
          price={item.price}
          img={item.img}
          desc={item.desc}
          onIncrement={() => handleIncrement(item.id)}
          onDecrement={() => handleDecrement(item.id)}
        />
      ))}
    </div>
  );
};

export default Perfs;
