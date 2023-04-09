import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Shut } from "../../assets/Shutter.svg";
import "../../components/styles-component/navigation/navigation.scss";
import { UserContext } from "../../contexts/user-context.";
import { signOutUser } from "../../util/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
