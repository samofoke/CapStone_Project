import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cart";

import "../../components/styles-component/checkout/checkout.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  return (
    <div>
      <h1>I am the checkout page.</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quant } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quant}</span>
              <span>decrease</span>
              <span onClick={() => addItemToCart(cartItem)}>increase</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
