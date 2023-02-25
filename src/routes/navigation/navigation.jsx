import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Shut } from "../../assets/Shutter.svg";
import "../../components/styles-component/navigation/navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shut className="logo" />
        </Link>
        <div className="page-links">
          <Link className="nav-link" to="/">
            Store
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
