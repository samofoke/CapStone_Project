import { createContext, useState, useEffect } from "react";

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
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const countItems = cartItems.reduce(
      (total, cartItem) => total + cartItem.quant,
      0
    );
    setCartCount(countItems);
  }, [cartItems]);

  const addItemToCart = (addProduct) => {
    setCartItems(addCartItem(cartItems, addProduct));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
