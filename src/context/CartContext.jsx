import React from "react";

export const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const clearCartAndReturnHome = () => {
    clearCart();
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCartAndReturnHome }}>
      {children}
    </CartContext.Provider>
  );
};
