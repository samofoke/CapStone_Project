import ProductCard from "../product-card/product-card";
import { Link } from "react-router-dom";
import "../styles-component/category-preview/category-preview.scss";

const CategoryPriew = ({ title, products }) => {
  // console.log("get products: ", products);
  return (
    <div className="category-preview">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPriew;
