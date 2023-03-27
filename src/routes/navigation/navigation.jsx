import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Shut } from "../../assets/Shutter.svg";
import "../../components/styles-component/navigation/navigation.scss";
import { UserContext } from "../../contexts/user-context.";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("getting the current User: ", currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shut className="logo" />
        </Link>
        <div className="page-links">
          <Link className="nav-link" to="/">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
