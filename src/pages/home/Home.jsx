import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/hero/Hero.jsx';
import Aisle from "../../components/aisles/Aisle.jsx";
import HomeItemCard from '../../components/homeItems/HomeItems.jsx';
import Review from '../../components/reviews/Revews.jsx';

const Home = () => {
  return (
    <>
    <Layout>
      <Hero />
      <Aisle />
      < HomeItemCard/>
      < Review/>
    </Layout>
    </>
  );
};

export default Home;