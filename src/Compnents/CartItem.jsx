import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, index, removeFromCart }) => {
  return (
    <li className="text-lg flex justify-between items-center bg-gray-100 p-3 rounded">
      {item.name} - {item.price} (Quantity: {item.count})
      <DeleteIcon
        onClick={() => removeFromCart(index)}
        className="cursor-pointer text-red-600 ml-2"
      />
    </li>
  );
};

export default CartItem;