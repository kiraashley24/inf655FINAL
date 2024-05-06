import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import MeatItems from "../../components/meatItems/MeatItems";



const Meat = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div>
        <h1>Meat Items</h1>
        <MeatItems cart={cart} addToCart={addToCart} /> 
      </div>
    </Layout>
  );
};

export default Meat;
