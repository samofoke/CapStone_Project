import "../styles-component/card-icon-style/card-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag/shopping-bag.svg";

const CardIcon = () => {
  return (
    <div className="icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
