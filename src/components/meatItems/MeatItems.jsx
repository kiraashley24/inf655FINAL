import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import meatData from './data';

const MeatItems = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="text-gray-600 body-font bg-teal-900">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {meatData.map((item, index) => (
            <div key={index} className="p-4 w-full md:w-1/4">
              <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                <img
                  className="lg:h-80 h-96 w-full"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-6 bg-orange-100">
                  <h1 className="name-font text-lg font-medium text-gray-900 mb-3">
                    {item.name}
                  </h1>
                  <h1 className="name-font text-lg font-medium text-gray-900 mb-3">
                    ${item.price}
                  </h1>
                  <div className="flex justify-center">
                    <button
                      className=" bg-amber-500 hover:bg-yellow-600 w-full text-black py-[4px] rounded-lg font-bold"
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
    </section>
  );
};

export default MeatItems;
