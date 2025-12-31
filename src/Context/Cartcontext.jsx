import { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
 const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);


function addToCart(item) {
  setCartItems(prev => {
    const exists = prev.find(i => i.idMeal === item.idMeal);

    if (exists) {
      return prev;
    }

    return [...prev, item];
  });
}
function clearCart() {
  setCartItems([]);
  localStorage.removeItem("cart"); // optional but good
}



  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
