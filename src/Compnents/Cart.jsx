// import React from "react";
// import { Delete } from "@mui/icons-material";

// const Cart = ({ cart = [], removeFromCart }) => {
//   return (
//     <div className="flex justify-center align-middle bg-amber-100 h-auto">
//       <div className="w-200 flex flex-col text-center p-5 m-10 bg-white shadow-lg">
//         <h2 className="text-2xl font-bold mb-5 bg-amber-400 p-2">Cart</h2>
//         {cart.length > 0 ? (
//           <ul className="space-y-3">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="text-lg flex justify-between items-center bg-gray-100 p-3 rounded"
//               >
//                 {item.name} - {item.price} (Quantity: {item.count})
//                 <button
//                   onClick={() => removeFromCart(index)}
//                   className="cursor-pointer text-red-600 ml-2 font-bold"
//                 >
//                   <Delete />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-800 text-2xl">No items in the cart.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
