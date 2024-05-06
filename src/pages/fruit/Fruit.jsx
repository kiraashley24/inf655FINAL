import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import FruitItems from "../../components/fruitItems/FruitItems";



const Fruit = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div>
        <h1>Fruit Items</h1>
        <FruitItems cart={cart} addToCart={addToCart} /> 
      </div>
    </Layout>
  );
};

export default Fruit;
