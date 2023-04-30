import { useContext } from "react";
import "../styles-component/product-card/product-card-style.scss";
import Button from "../button-component/button";
import { CartContext } from "../../contexts/cart/cart";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
