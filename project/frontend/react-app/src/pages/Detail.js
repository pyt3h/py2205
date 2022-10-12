function Detail() {
  return (
    <>
      <div class="section-header">
        <div class="header-main">
          <div class="container">
            <div class="row gy-3 align-items-center">
              <div class="col-lg-2 col-sm-4 col-4">
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
              <div class="col-lg-5 col-md-12 col-12"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-lg-6">
            <article class="gallery-wrap">
              <div class="img-big-wrap img-thumbnail">
                <a href="images/items/detail1/big.jpg">
                  <img alt="" height="560" src="images/items/detail1/big.jpg" />
                </a>
              </div>
            </article>
          </div>
          <div class="col-lg-6">
            <article class="ps-lg-3">
              <h4 class="title text-dark">
                Quality Men's Hoodie for Winter, Men's Fashion <br /> Casual
                Hoodie{" "}
              </h4>

              <div class="my-3">
                <var class="price h5">$75.00</var>
              </div>

              <p>
                Modern look and quality demo item is a streetwear-inspired
                collection that continues to break away from the conventions of
                mainstream fashion. Made in Italy, these black and brown
                clothing low-top shirts for men.
              </p>

              <div class="row mb-4">
                <div class="col-md-4 col-6 mb-3 d-flex">
                  <label class="form-label mt-2 me-2">
                    <b>Quantity:</b>
                  </label>
                  <input class="form-control" type="number" min="1" value="1" />
                </div>
              </div>

              <a href="list.html" class="btn btn-primary me-1">
                {" "}
                <i class="fa fa-shopping-basket"></i> Add to cart{" "}
              </a>
              <a href="cart.html" class="btn btn-warning">
                Buy now
              </a>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
