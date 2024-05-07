import { useNavigate } from "react-router-dom";
import React from 'react'
import homeData from "./data";
import { CartContext } from "../../context/CartContext";

const HomeItemCard = () => {
  const navigate = useNavigate();
  const { addToCart } = React.useContext(CartContext);

  return (
      <div className="mt-2">
        
        <section className="text-gray-600 body-font bg-yellow-100">
          <div className="container px-5 py-5 mx-auto">
            
            <div className="flex flex-wrap -m-4">
              {homeData.map((item, index) => {
                const { image, name, price } = item;
                return (
                  <div key={index} className="p-4 w-full md:w-1/4">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                      <img
                        className="lg:h-80 h-96 w-full"
                        onClick={() => navigate("/itemInfo", { state: { item: item } })}
                        src={image}
                        alt="img"
                      />
                      <div className="p-6 bg-gray-50 flex justify-between">
                        <div>
                          <h1 className="name-font text-lg font-medium text-gray-900 mb-3">
                            {name.substring(0, 25)}
                          </h1>
                        </div>
                        <div>
                          <h1 className="name-font text-lg font-medium text-green-900 mb-3">
                            ${price}
                          </h1>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          className=" bg-green-600 hover:bg-green-800 w-full text-white py-[4px] rounded-lg font-bold"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
};
    
export default HomeItemCard;
