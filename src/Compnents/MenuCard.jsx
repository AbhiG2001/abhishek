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
    <div className="bg-gray-100 border-6 border-white w-[100%] sm:w-[220px] flex flex-row sm:flex-col items-center p-1 justify-between rounded-3xl m-1 sm:m-3 transition-transform hover:scale-105 hover:bg-orange-100">
      <div className="sm:h-[100%] sm:w-[100%] h-[100%] w-[100%] flex flex-col items-center justify-center">
        <h1 className="text-lg hidden md:block">{menu.name}</h1>
        <img
          className="h-[200px] w-[200px] md:h-[300px] md:w-[400px] lg:h-[150px] lg:w-[200px] rounded-full aspect-video"
          src={menu.img}
          alt={menu.name}
        />
      </div>
      <div className="sm:h-[100%] sm:w-[100%] h-[100%] w-[100%] flex flex-col justify-between items-center">
        <h1 className="text-lg md:hidden lg:hidden p-0.5 w-full">{menu.name}</h1>
        <p className="text-gray-700 pt-0.5 p-1">{menu.desc}</p>
        <p className="text-xl bottom-0">₹{menu.price}</p>

        {/* Conditional Buttons */}
        {quantity > 0 ? (
          <div className="flex items-center gap-2">
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
            variant="outlined"
            size="small"
            onClick={() => addToCart(menu)}
            sx={{ "&:hover": { color: "darkblue", bgcolor: "ButtonFace" } }}
          >
            ADD TO CART
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuCard;