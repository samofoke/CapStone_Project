import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Shut } from "../../assets/Shutter.svg";
import "../../components/styles-component/navigation/navigation.scss";
import { UserContext } from "../../contexts/user-context.";
import { signOutUser } from "../../util/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart/cart";
import CardIcon from "../../components/card-icon/card-icon";
import CardDropdown from "../../components/card-dropdown/dropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  //console.log("getting the current User: ", currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shut className="logo" />
        </Link>
        <div className="page-links">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
