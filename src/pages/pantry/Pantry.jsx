import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import PantryItems from "../../components/pantryItems/PantryItems";
import Hero from '../../components/hero/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";

const Pantry = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <>
    <Hero />
      <Layout>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">PANTRY</h1>
          <FontAwesomeIcon icon={faLeaf} className="text-green-600 text-3xl" />
        </div>
        <PantryItems cart={cart} addToCart={addToCart}/>
      </Layout>
    </>
  );
};

export default Pantry;

