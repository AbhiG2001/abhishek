import React from "react";
import MenuCard from "./MenuCard";
import menuData from "./Data.json";
import { useCart } from "./CartContext"; // Import useCart from context

const MenuCollection = ({ searchQuery = "" }) => {
  const { addToCart } = useCart(); // use addToCart from context

  return (
    <div className="bg-gray-300 min-h-screen w-full flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-6 text-center">MENU</h1>

      {/* Loop through each category in the menuData */}
      {Object.keys(menuData).map((category) => {
        // Filter menu items based on the search query
        const filteredItems = menuData[category].filter((menu) =>
          menu.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div key={category} className="w-full max-w-6xl text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-500 pb-2">{category}</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {filteredItems.length > 0 ? (
                filteredItems.map((menu, index) => <MenuCard key={index} menu={menu} addToCart={addToCart} />)
              ) : (
                <p className="text-gray-500">No matching items found.</p>
              )}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCollection;