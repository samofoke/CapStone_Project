import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Shut } from "../../assets/Shutter.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "../../components/styles-component/navigation/navigation.jsx";
import { UserContext } from "../../contexts/user-context.";
import { signOutUser } from "../../util/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart/cart";
import CardIcon from "../../components/card-icon/card-icon";
import CardDropdown from "../../components/card-dropdown/dropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log("getting the current User: ", currentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <Shut className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
