import { Fragment, memo } from "react";
import { Link } from "react-router-dom";

function Navbar({logoPicture}:{logoPicture:string | undefined}) {
  return (
    <Fragment>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={logoPicture}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>
      </nav>
    </Fragment>
  );
}

export default memo(Navbar);
