import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const FruitPage = () => {
  const { cart } = useContext(CartContext);
  const fruitItems = cart.filter(item => item.category === "fruit");

  return (
    <div>
      <h1>Fruit Items</h1>
      <ul>
        {fruitItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitPage;
