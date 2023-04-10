import "../styles-component/card-dropdown/card-dropdown.scss";
import Button from "../button-component/button";

const CardDropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="cart-items">
        <Button>Go TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CardDropdown;
