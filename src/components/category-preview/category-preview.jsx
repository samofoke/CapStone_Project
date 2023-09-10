import ProductCard from "../product-card/product-card";
import "../styles-component/category-preview/category-preview.scss";

const CategoryPriew = ({ title, products }) => {
  console.log("get products: ", products);
  return (
    <div className="category-preview">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
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
