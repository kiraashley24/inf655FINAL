import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import DessertItems from "../../components/dessertItems/DessertItems";



const Dessert = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Layout>
      <div>
        <h1>Dessert Items</h1>
        <DessertItems cart={cart} addToCart={addToCart} /> {/* Use DessertItems component */}
      </div>
    </Layout>
  );
};

export default Dessert;
