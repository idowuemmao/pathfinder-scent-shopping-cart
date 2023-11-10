import React, { useEffect, useState } from "react";
import ShopItemData from "./ShopItemDb";
import PerfCard from "./PerfCard";

const Perfs = () => {
  const [items, setItems] = useState(ShopItemData);

  const handleIncrement = (itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  };
  const handleDecrement = (itemId) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
    });
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      {items ? (
        items.map((item) => (
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
        ))
      ) : (
        <PerfCard />
      )}
    </div>
  );
};

export default Perfs;
