import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartPage = () => {
  const { cart, updateCartItemQuantity } = useCart();
  const [totalAmount, setTotalAmount] = useState(0);

  // Debugging logs to check cart data
  useEffect(() => {
    console.log("Cart contents:", cart);

    if (cart && cart.length > 0) {
      setTotalAmount(cart.reduce((sum, item) => sum + item.price * (item.count || 0), 0));
    } else {
      setTotalAmount(0);
    }

    console.log("Total Amount calculated:", totalAmount);
  }, [cart]);

  return (
    <div className="flex justify-center bg-amber-100 min-h-screen p-10 ">
      <div className=" bg-white shadow-lg p-6 flex flex-col items-center sm:w-[50%] w-full">
        <h2 className="text-2xl font-bold mb-5 text-center bg-amber-400 p-2 w-full">
          Cart
        </h2>

        {cart.length > 0 ? (
          <>
            <ul className="space-y-3 w-full ">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="text-lg flex justify-between items-center bg-gray-100 p-3 rounded sm:flex-row sm:items-start sm:gap-4"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full mr-4"
                  />

                  {/* Item details */}
                  <div className="flex-1">
                    <p>{item.name}</p>
                    <p>₹{item.price} (Qty: {item.count})</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <IconButton
                      onClick={() => updateCartItemQuantity(item.name, item.count - 1)}
                      color="error"
                      disabled={item.count <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <span className="text-lg font-bold">{item.count}</span>
                    <IconButton
                      onClick={() => updateCartItemQuantity(item.name, item.count + 1)}
                      color="primary"
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total Amount */}
            <h2 className="text-xl font-bold mt-5 bg-amber-300 p-3 rounded">
              Total Amount Required = ₹{totalAmount}
            </h2>
          </>
        ) : (
          <p className="text-gray-800 text-center text-xl">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;