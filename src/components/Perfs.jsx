import React, { useEffect, useState } from "react";
import ShopItemData from "./ShopItemDb";
import PerfCard from "./PerfCard";

const Perfs = () => {
  const [items, setItems] = useState(ShopItemData);
  const storedItems = JSON.parse(localStorage.getItem("items"));
  useEffect(() => {
    if (storedItems) {
      setItems(storedItems);
    } else {
      setItems(ShopItemData);
    }
  }, []);

  const updateLocalStorage = (updateItems) => {
    updateItems = updateItems.filter((item) => item.count !== 0);
    localStorage.setItem("items", JSON.stringify(updateItems));
  };
  const handleIncrement = (itemId) => {
    setItems((prevItems) => {
      const updateItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      updateLocalStorage(updateItems);
      return updateItems;
    });
  };
  const handleDecrement = (itemId) => {
    setItems((prevItems) => {
      const updateItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      updateLocalStorage(updateItems);
      return updateItems;
    });
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
