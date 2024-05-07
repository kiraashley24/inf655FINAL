import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import DessertItems from "../../components/dessertItems/DessertItems";
import Hero from '../../components/hero/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCakeCandles} from "@fortawesome/free-solid-svg-icons";


const Dessert = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <>
    <Hero />
      <Layout>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">DESSERT</h1>
          <FontAwesomeIcon icon={faCakeCandles} className="text-pink-200 text-2xl" />
        </div>
        <DessertItems cart={cart} addToCart={addToCart}/>
      </Layout>
    </>
  );
};

export default Dessert;
