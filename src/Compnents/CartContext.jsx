import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart (or increase quantity)
  const addToCart = (menuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === menuItem.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === menuItem.name ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...menuItem, count: 1 }];
    });
  };

  // Update item quantity (increase/decrease)
  const updateCartItemQuantity = (itemName, newCount) => {
    setCart((prevCart) => {
      if (newCount <= 0) {
        return prevCart.filter((item) => item.name !== itemName); // Remove item if quantity reaches 0
      }
      return prevCart.map((item) =>
        item.name === itemName ? { ...item, count: newCount } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);