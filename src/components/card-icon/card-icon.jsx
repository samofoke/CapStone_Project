import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cart";
import "../styles-component/card-icon-style/card-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag/shopping-bag.svg";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="icon-container" onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
