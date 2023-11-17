import axios from "axios";
import React, { useEffect, useState } from "react";
import ClothCard from "./ClothCard";

const Clothes = ({ setTotalCount }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        alert("Error Fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  const handleIncrement = (itemId) => {
    const search = data.findIndex((item) => item.id === itemId);
    if (search !== -1) {
      const updatedItems = [...data];
      updatedItems[search] = {
        ...data[search],
        count: data[search].count + 1,
      };
      setData(updatedItems);
      updateLocalStorage(updatedItems);
      calculation(updatedItems);
    }
  };
  const handleDecrement = (itemId) => {
    const search = data.findIndex((item) => item.id === itemId);
    if (search >= 0 && data[search].count > 0) {
      const updatedItems = [...data];
      updatedItems[search] = {
        ...data[search],
        count: data[search].count - 1,
      };
      setData(updatedItems);
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
    <div>
      {data?.map((item) => (
        <ClothCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          desc={item.description}
          category={item.category}
          image={item.image}
          rating={item.rating.rate}
          count={item.rating.count}
          onIncrement={() => handleIncrement(item.id)}
          onDecrement={() => handleDecrement(item.id)}
        />
      ))}
    </div>
  );
};

export default Clothes;
