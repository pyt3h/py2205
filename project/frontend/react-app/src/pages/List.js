import Header from "components/Header";
function SearchBar() {
  return(
    <form action="#" class="">
      <div class="input-group">
        <input class="form-control" placeholder="Search" />
        <button class="btn btn-primary">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </form>
  )
}
function List() {
  return (
    <>
      <Header>
        <SearchBar/>
      </Header>

      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-lg-3">
            <div class="collapse card d-lg-block mb-5">
              <div class="filter-group">
                <div class="card-header">
                  <a href="#/" class="title">
                    Brands
                  </a>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <label class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        checked
                      />
                      <span class="form-check-label"> Mercedes </span>
                    </label>

                    <label class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        checked
                      />
                      <span class="form-check-label"> Toyota </span>
                    </label>

                    <label class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        checked
                      />
                      <span class="form-check-label"> Mitsubishi </span>
                    </label>

                    <label class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        checked
                      />
                      <span class="form-check-label"> Nissan </span>
                    </label>

                    <label class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span class="form-check-label"> Honda </span>
                    </label>

                    <label class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span class="form-check-label"> Honda accord </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="filter-group">
                <div class="card-header">
                  <a href="#/" class="title">
                    Price
                  </a>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    <div class="row mb-3">
                      <div class="col-6">
                        <label for="min" class="form-label">
                          Min
                        </label>
                        <input class="form-control" type="number" min="0" />
                      </div>

                      <div class="col-6">
                        <label for="max" class="form-label">
                          Max
                        </label>
                        <input class="form-control" type="number" min="0" />
                      </div>
                    </div>
                    <button class="btn btn-light w-100" type="button">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="card card-product-grid">
                  <div class="img-wrap">
                    <a href="detail.html">
                      <img alt="" src="/images/items/10.jpg" />
                    </a>
                  </div>
                  <div class="info-wrap border-top">
                    <div class="price-wrap">
                      <strong class="price">$99.00</strong>
                    </div>
                    <p class="title mb-2 text-decoration-none">
                      T-shirts with multiple colors, for men and lady
                    </p>

                    <button class="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
