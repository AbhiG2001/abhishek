import React from "react";
import { useCart } from "./CartContext";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MenuCard = ({ menu }) => {
  const { cart, addToCart, updateCartItemQuantity } = useCart();

  // Find the item in the cart to track its quantity
  const cartItem = cart.find((item) => item.name === menu.name);
  const quantity = cartItem ? cartItem.count : 0;

  return (
    <div className="grid grid-cols sm:grid-cols-1 grid-rows-1 grid-cols-2 bg-white p-2  rounded-2xl  flex-1 sm:h-[400px] h-[210px] ">
      {/* Image */}
      <div className="w-full flex justify-center items-center  flex-1/2 sm:h-[200px] h-[190px] ">
        <img
          className="h-[160px] w-[160px] md:h-[170px] md:w-[170px] rounded-full object-cover "
          src={menu.img}
          alt={menu.name}
        />
      </div>

      {/* Details */}
      <div className=" flex flex-col items-center justify-between flex-1/2 h-[190px] sm:h-[200px]">
        <h1 className="text-xl font-semibold text-gray-800">{menu.name}</h1>
        <p className="text-gray-600 text-sm text-center px-3">{menu.desc}</p>
        <p className="text-lg font-bold text-green-600 ">₹{menu.price}</p>

        {/* Conditional Buttons */}
        {quantity > 0 ? (
          <div className="flex items-center gap-2 mt-3">
            <IconButton onClick={() => updateCartItemQuantity(menu.name, quantity - 1)} color="error">
              <RemoveIcon />
            </IconButton>
            <span className="text-lg font-bold">{quantity}</span>
            <IconButton onClick={() => updateCartItemQuantity(menu.name, quantity + 1)} color="primary">
              <AddIcon />
            </IconButton>
          </div>
        ) : (
          <Button
            endIcon={<ShoppingCartIcon />}
            variant="contained"
            size="small"
            onClick={() => addToCart(menu)}
            sx={{
              backgroundColor: "#FFA500",
              "&:hover": { backgroundColor: "#FF8C00" },
              // marginTop: "10px",
            }}
          >
            ADD TO CART
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;