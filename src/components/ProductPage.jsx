/*import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductPage = ({ category, data }) => {
  const { addToCart } = useContext(CartContext);
  
  return (
    <div>
      <h1>{category} Items</h1>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="p-4 w-full md:w-1/4">
            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
              <img className="lg:h-80 h-96 w-full" src={item.image} alt={item.name} />
              <div className="p-6 bg-orange-100">
                <h1 className="name-font text-lg font-medium text-gray-900 mb-3">{item.name}</h1>
                <h1 className="name-font text-lg font-medium text-gray-900 mb-3">{item.desc}</h1>
                <h1 className="name-font text-lg font-medium text-gray-900 mb-3">${item.price}</h1>
                <div className="flex justify-center">
                  <button
                    className="bg-amber-500 hover:bg-yellow-600 w-full text-black py-[4px] rounded-lg font-bold"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
*/