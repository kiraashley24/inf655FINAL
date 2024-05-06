import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/hero/Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import FruitItems from '../../components/fruitItems/FruitItems';


const Fruit = () => {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <>
      <Hero />
      <Layout>
      <div className="flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">FRUIT</h1>
        <FontAwesomeIcon icon={faLemon} className="text-yellow-500 text-3xl" />
      </div>
        <FruitItems cart={cart} addToCart={addToCart} />
      </Layout>
    </>
  );
};

export default Fruit;
