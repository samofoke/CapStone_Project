import { Routes, Route } from "react-router-dom";
import CategoryPreviewContainer from "../category-preview/category-preview";
import CategoryRoute from "../category/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreviewContainer />} />
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
};

export default Shop;
