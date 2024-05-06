import React from 'react';
import Layout from '../../components/layout/Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCarrot} from "@fortawesome/free-solid-svg-icons";
import VegeItems from "../../components/vegeItems/VegeItems";
import Review from '../../components/reviews/Revews';

const Vegetables = () => {
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center italic text-green-600 mr-2">VEGETABLES</h1>
          <FontAwesomeIcon icon={faCarrot} className="text-orange-600 text-3xl" />
        </div>
        <VegeItems />
        <Review />
      </Layout>
    </>
  );
};

export default Vegetables;
