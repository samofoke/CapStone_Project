import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div>Logo</div>
        <div className="page-links">
          <Link className="nav-link" to="/">
            Store
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
