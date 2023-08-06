import { useContext, Fragment } from "react";
import { ProductContext } from "../../contexts/products-context";
import ProductCard from "../../components/product-card/product-card";
import "../../components/styles-component/shop/shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment>
          <h2>{title}</h2>
          <div className="products-container">
            {products[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
