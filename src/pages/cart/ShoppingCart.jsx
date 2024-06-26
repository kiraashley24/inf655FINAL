import React from "react";
import { Link } from 'react-router-dom';
import Layout from "../../components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart } = React.useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate discount (for example, 10% of total price)
  const deliveryCharge = 4;

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-center text-green-600 italic sm:text-4xl">
            Shopping Cart <FontAwesomeIcon icon={faCartShopping} className="text-green-600 text-3xl" />
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <div key={index} className="">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="sm:h-40 sm:w-40 h-32 w-32 rounded-md object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                              <span className="font-semibold text-black">
                                {item.name}
                              </span>
                              </h3>
                            </div>
                            <div className="mt-1 flex items-end">
                              <p className="text-sm font-medium text-gray-900">
                                ${item.price} x {item.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="mb-2 flex">
                      <div className="ml-6 flex text-sm">
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            size="lg"
                            className="text-red-500"
                          />

                          <span className="text-xs font-medium text-red-500">
                            Remove from cart
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
              Price Details
              </h2>
              <div>
                <dl className=" space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">
                    Quantity ({cart.reduce((total, item) => total + item.quantity, 0)} items)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ${totalPrice}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800">
                      <span>Delivery Charge</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700">
                      + ${deliveryCharge}
                    </dd>
                  </div>
                  
                  <div className="flex items-center justify-between border-y border-dashed py-4 ">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount Due
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${totalPrice + deliveryCharge}
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  <div className="flex gap-4 mb-6">
                  <Link to="/ordersummary">
                    <button className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-green-500 hover:text-white hover:bg-green-800 rounded-xl">
                      Order Your Groceries
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
