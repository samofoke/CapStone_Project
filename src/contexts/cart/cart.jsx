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

const removeCartItem = (cartItems, removeItemToCart) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === removeItemToCart.id
  );

  if (existingCartItem.quant === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItemToCart.id);
  }
  return cartItems.map((item) =>
    item.id === removeItemToCart.id ? { ...item, quant: item.quant - 1 } : item
  );
};

const clearItems = (cartItems, clearThisItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== clearThisItems.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItem: () => {},
  clearItem: () => {},
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

  const removeItemToCart = (itemToreomve) => {
    setCartItems(removeCartItem(cartItems, itemToreomve));
  };

  const clearItemFromCart = (clearThisItems) => {
    setCartItems(clearItems(cartItems, clearThisItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
