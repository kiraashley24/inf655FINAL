import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCarrot} from "@fortawesome/free-solid-svg-icons";
import VegeItems from "../../components/vegeItems/VegeItems";
import Hero from '../../components/hero/Hero';


const Vegetables = () => {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <>
    <Hero />
      <Layout>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">VEGETABLES</h1>
          <FontAwesomeIcon icon={faCarrot} className="text-orange-600 text-3xl" />
        </div>
        <VegeItems cart={cart} addToCart={addToCart}/>
      </Layout>
    </>
  );
};

export default Vegetables;

