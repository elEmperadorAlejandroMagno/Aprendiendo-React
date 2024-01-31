import { useContext } from "react";
import { CartContext } from "../context/cart_useReducer.jsx";


export const useCart = () => {
  const context = useContext(CartContext)
  
  if (context == undefined) {
    throw new Error ('useCart must be use within CartProvider')
  }
  return context
}
