import { createContext, useState } from "react";

const addCartItem = (cartItems, addProduct) => {
  const existingCartItem = cartItems.find((item) => item.id === addProduct.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === addProduct.id ? { ...item, quant: item.quant + 1 } : item
    );
  }
  return [...cartItems, { ...addProduct, quant: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (addProduct) => {
    setCartItems(addCartItem(cartItems, addProduct));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
