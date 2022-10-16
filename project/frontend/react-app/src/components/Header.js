//src/components/Header.js
import {useSliceSelector} from "utils/reduxHelper";
import {Link} from "react-router-dom";

function Header({children}) {
  const {cartList} = useSliceSelector('app',['cartList']);
  let totalQty = 0;
  for(let i = 0; i< cartList.length;i++){
    totalQty += cartList[i].qty;
  }
  return (
    <div className="section-header">
      <div className="header-main">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-2">
              <Link to="/" className="navbar-brand">
                <img alt="" className="logo" height="40" src="/images/logo.svg" />
              </Link>
            </div>
            <div className="order-last col-5">
              <div className="float-end ms-2">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link py-0 dropdown-toggle"
                      href="#/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="icon-xs bg-gray rounded-circle me-2">
                        <i className="fa fa-user"></i>{" "}
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="update-profile.html">
                          Profile
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <hr className="dropdown-divider" />{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="#/">
                          Sign Out
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="float-end ms-2">
                <a className="btn btn-light" href="signin.html">
                  <i className="fa fa-user"></i> <span className="ms-1">Sign in</span>
                </a>
              </div>
              <div className="float-end ms-2">
                <a className="btn btn-light" href="cart.html">
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="ms-1">My cart ({totalQty}) </span>
                </a>
              </div>
            </div>
            <div className="col-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
