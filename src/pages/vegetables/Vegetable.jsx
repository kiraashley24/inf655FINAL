import React from "react";
import vegeData from "./data"; // Adjust the import statement

import ProductPage from "../../components/ProductPage";

const Vegetable = () => {
  return <ProductPage category="Vegetable" data={vegeData} />;
};

export default Vegetable;

