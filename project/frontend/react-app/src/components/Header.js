//src/components/Header.js
function Header({children}) {
  return (
    <div class="section-header">
      <div class="header-main">
        <div class="container">
          <div class="row gy-3 align-items-center">
            <div class="col-2">
              <a href="list.html" class="navbar-brand">
                <img alt="" class="logo" height="40" src="images/logo.svg" />
              </a>
            </div>
            <div class="order-last col-5">
              <div class="float-end ms-2">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link py-0 dropdown-toggle"
                      href="#/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="icon-xs bg-gray rounded-circle me-2">
                        <i class="fa fa-user"></i>{" "}
                      </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        {" "}
                        <a class="dropdown-item" href="update-profile.html">
                          Profile
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <hr class="dropdown-divider" />{" "}
                      </li>
                      <li>
                        {" "}
                        <a class="dropdown-item" href="#/">
                          Sign Out
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="float-end ms-2">
                <a class="btn btn-light" href="signin.html">
                  <i class="fa fa-user"></i> <span class="ms-1">Sign in</span>
                </a>
              </div>
              <div class="float-end ms-2">
                <a class="btn btn-light" href="cart.html">
                  <i class="fa fa-shopping-cart"></i>{" "}
                  <span class="ms-1">My cart (4) </span>
                </a>
              </div>
            </div>
            <div class="col-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
