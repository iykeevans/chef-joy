import { useState, useEffect } from "react";
import cartStorage from "../utils/cart-storage";

export default function useCart() {
  const [state, setState] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setState(cartStorage.getStore());
  }, []);

  useEffect(() => {
    setCart(cartStorage.getCart());
  }, [state]);

  const mutateCart = (identifier, payload) => {
    const updatedStore = cartStorage.updateCart(identifier, payload);
    setState(updatedStore);
  };

  return {
    mutateCart,
    cart,
    store: state,
    cartCount: cartStorage.getCartItemTotalCount(),
  };
}
