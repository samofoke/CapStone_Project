import { createContext, useState, useEffect } from "react";
import { getCollections } from "../util/firebase/firebase.utils";

export const ProductContext = createContext({
  products: {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCollectionMap = async () => {
      const categoryMap = await getCollections();
      console.log(categoryMap);
      setProducts(categoryMap);
    };
    getCollectionMap();
  }, []);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
