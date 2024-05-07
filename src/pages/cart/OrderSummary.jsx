import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from "../../components/layout/Layout";

const OrderSummary = () => {
  const { cart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Layout>
    <div className="container mx-auto px-4 max-w-2xl py-8">
      <h2 className="text-2xl font-bold text-green-600 text-center mb-4">Order Summary</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Items in Your Order</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 italic">Thanks for ordering with Enrichment Market</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {cart.map((item) => (
              <div key={item.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">{item.name}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{item.quantity} x ${item.price}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default OrderSummary;
