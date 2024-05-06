import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import DessertItems from "../../components/dessertItems/DessertItems";
import Hero from '../../components/hero/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faIceCream} from "@fortawesome/free-solid-svg-icons";


const Dessert = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <>
    <Hero />
      <Layout>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center italic text-green-600 mr-2">DESSERT</h1>
          <FontAwesomeIcon icon={faIceCream} className="text-pink-300 text-3xl" />
        </div>
        <DessertItems cart={cart} addToCart={addToCart}/>
      </Layout>
    </>
  );
};

export default Dessert;
