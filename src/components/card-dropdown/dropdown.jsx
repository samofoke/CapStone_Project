import { useContext } from "react";
import "../styles-component/card-dropdown/card-dropdown.scss";
import Button from "../button-component/button";
import CardItem from "../card-item/card-item";
import { CartContext } from "../../contexts/cart/cart";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="dropdown-container">
      <div className="cart-items">
        {cartItems.map((e) => (
          <CardItem key={e.id} item={e} />
        ))}
        <Button>Go TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CardDropdown;
