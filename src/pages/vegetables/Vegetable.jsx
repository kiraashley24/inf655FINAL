import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import VegeItems from "../../components/vegeItems/VegeItems";



const Vegetables = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div>
        <h1>Vegetable Items</h1>
        <VegeItems cart={cart} addToCart={addToCart} /> 
      </div>
    </Layout>
  );
};

export default Vegetables;
