import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/products-context";
import ProductCard from "../../components/product-card/product-card";
import "../../components/styles-component/category/category.scss";

const CategoryRoute = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(ProductContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default CategoryRoute;
