import "../styles-component/product-card/product-card-style.scss";
import ButtonComponent from "../button-component/button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted">Add to card</ButtonComponent>
    </div>
  );
};

export default ProductCard;
