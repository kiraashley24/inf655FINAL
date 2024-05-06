import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import BreadItems from "../../components/breadItems/BreadItems";
import Hero from '../../components/hero/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";



const Bread = () => {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <>
      <Hero />
      <Layout>
      <div className="flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">BREAD</h1>
        <FontAwesomeIcon icon={faBreadSlice} className="text-yellow-800 text-3xl" />
      </div>
        <BreadItems cart={cart} addToCart={addToCart} />
      </Layout>
    </>
  );
};

export default Bread;
