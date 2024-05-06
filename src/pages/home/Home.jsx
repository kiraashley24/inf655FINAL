import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/hero/Hero.jsx';
import Aisle from "../../components/aisles/Aisle.jsx";
import HomeItemCard from '../../components/homeItems/HomeItems.jsx';
import Review from '../../components/reviews/Revews.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <Aisle />
        <h1 className="text-center italic mb-5 text-4xl font-bold m-2">
              <span className="text-red-500">*</span>
              <span className="text-orange-500">*</span>
              <span className="text-yellow-500">*</span>
              <span className="text-green-600">D</span>
              <span className="text-red-500">I</span>
              <span className="text-orange-500">S</span>
              <span className="text-yellow-500">C</span>
              <span className="text-green-600">O</span>
              <span className="text-red-500">U</span>
              <span className="text-orange-500">N</span>
              <span className="text-yellow-500">T</span>
              <span className="text-green-600">S</span>
              <span className="text-red-500">*</span>
              <span className="text-orange-500">*</span>
              <span className="text-yellow-500">*</span>
            </h1>
        <HomeItemCard />
        <Review />
      </Layout>
    </>
  );
};

export default Home;
