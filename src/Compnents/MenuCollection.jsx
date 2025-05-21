

import React from "react";
import MenuCard from "./MenuCard";

import menuData from "./Data.json";
import { useCart } from "./CartContext";  // Import context hook

const MenuCollection = () => {
  const { addToCart } = useCart();  // use addToCart from context

  return (
    <>
      
      <div className="bg-gray-300 flex flex-wrap justify-center p-5 w-full min-h-screen">
        <h1 className="w-full text-center text-3xl mb-6">MENU</h1>
        {Object.keys(menuData).map((category) => (
          <div key={category} className="w-full text-center mb-5">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <section className="flex flex-wrap justify-center">
              {menuData[category].map((menu, index) => (
                <MenuCard key={index} menu={menu} />  // MenuCard consumes addToCart internally
              ))}
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCollection;
