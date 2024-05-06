import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import PantryItems from "../../components/pantryItems/PantryItems";



const Pantry = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div>
        <h1>Pantry Items</h1>
        <PantryItems cart={cart} addToCart={addToCart} /> 
      </div>
    </Layout>
  );
};

export default Pantry;
