import { useContext } from "react";
import "../styles-component/card-dropdown/card-dropdown.scss";
import Button from "../button-component/button";
import CardItem from "../card-item/card-item";
import { CartContext } from "../../contexts/cart/cart";
import { useNavigate } from "react-router-dom";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="dropdown-container">
      <div className="cart-items">
        {cartItems.map((e) => (
          <CardItem key={e.id} item={e} />
        ))}
        <Button onClick={checkoutHandler}>Go TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CardDropdown;
