import { useContext, Fragment } from "react";
import { ProductContext } from "../../contexts/products-context";
import CategoryPriew from "../../components/category-preview/category-preview";

const CategoryPreviewContainer = () => {
  const { categoriesMap } = useContext(ProductContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPriew key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoryPreviewContainer;
