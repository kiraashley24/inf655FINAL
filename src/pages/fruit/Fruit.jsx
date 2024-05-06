import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import FruitItems from "./FruitItems";
import fruitData from "./data";
import Layout from "../../components/layout/Layout";

const Fruit = () => {
  const { cart } = useContext(CartContext);
  const fruitItems = cart.filter(item => item.category === "fruit");

  return (
    <Layout>
      <div>
        <h1>Fruit Items</h1>
        <FruitItems fruitData={fruitData} />
      </div>
    </Layout>
  );
};

export default Fruit;