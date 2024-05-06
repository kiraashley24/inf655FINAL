import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import BreadItems from "../../components/breadItems/BreadItems";



const Bread = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div>
        <h1>Bread Items</h1>
        <BreadItems cart={cart} addToCart={addToCart} /> 
      </div>
    </Layout>
  );
};

export default Bread;
