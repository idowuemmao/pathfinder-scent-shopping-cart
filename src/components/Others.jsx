import React, { useEffect, useMemo, useState } from "react";
import ShopItemData from "./ShopItemDb";
import ItemCard from "./ItemCard";

const Others = ({ setTotalCount }) => {
  const otherItemsDetails = useMemo(() => {
    return ShopItemData.items.find((item) => item.type === "others");
  }, []);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));

    if (storedItems) {
      setItems(storedItems);
    } else {
      setItems(otherItemsDetails.details);
    }
  }, []);
  const handleIncrement = (itemId) => {
    const search = items.findIndex((item) => item.id === itemId);
    if (search !== -1) {
      const updatedItems = [...items];
      updatedItems[search] = {
        ...items[search],
        rating: {
          ...items[search].rating,
          count: (items[search].rating ? items[search].rating.count : 0) + 1,
        },
      };
      setItems(updatedItems);
      updateLocalStorage(updatedItems);
      calculation(updatedItems);
    }
  };
  const handleDecrement = (itemId) => {
    const search = items.findIndex((item) => item.id === itemId);
    if (search >= 0 && items[search].rating.count > 0) {
      const updatedItems = [...items];
      updatedItems[search] = {
        ...items[search],
        rating: {
          ...items[search].rating,
          count: items[search].rating.count - 1,
        },
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
      (total, item) => total + item.rating.count,
      0
    );
    setTotalCount(totalCount);
    localStorage.setItem("totalCountOthers", totalCount.toString());
  };
  // console.log(items);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {items?.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          name={item.title}
          price={item.price}
          desc={item.description}
          category={item.category}
          img={item.img}
          count={item.rating.count}
          onIncrement={() => handleIncrement(item.id)}
          onDecrement={() => handleDecrement(item.id)}
        />
      ))}
    </div>
  );
};

export default Others;
