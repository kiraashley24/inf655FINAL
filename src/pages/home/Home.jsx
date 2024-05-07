import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/hero/Hero.jsx';
import Aisle from "../../components/aisles/Aisle.jsx";
import HomeItemCard from '../../components/homeItems/HomeItems.jsx';
import Review from '../../components/reviews/Revews.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <Aisle />
        <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faArrowDown} className="text-green-600 text-3xl" />
      <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">Discounts</h1>
        <FontAwesomeIcon icon={faArrowDown} className="text-green-600 text-3xl" />
      </div>
        <HomeItemCard />
        <Review />
      </Layout>
    </>
  );
};

export default Home;
