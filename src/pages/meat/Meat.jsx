import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import MeatItems from "../../components/meatItems/MeatItems";
import Hero from '../../components/hero/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBacon} from "@fortawesome/free-solid-svg-icons";


const Meat = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <>
    <Hero />
      <Layout>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">MEAT</h1>
          <FontAwesomeIcon icon={faBacon} className="text-red-600 text-2xl" />
        </div>
        <MeatItems cart={cart} addToCart={addToCart}/>
      </Layout>
    </>
  );
};

export default Meat;
