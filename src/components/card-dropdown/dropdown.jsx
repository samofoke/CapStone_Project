import { useContext } from "react";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartIterms,
} from "../styles-component/card-dropdown/card-dropdown.jsx";
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
    <CartDropdownContainer>
      <CartIterms>
        {cartItems.length ? (
          cartItems.map((e) => <CardItem key={e.id} item={e} />)
        ) : (
          <EmptyMessage>Your card is empty.</EmptyMessage>
        )}
        <Button onClick={checkoutHandler}>Go TO CHECKOUT</Button>
      </CartIterms>
    </CartDropdownContainer>
  );
};

export default CardDropdown;
