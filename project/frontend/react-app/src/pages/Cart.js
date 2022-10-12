import Header from "components/Header";
function Cart() {
  return (
    <>
      <Header/>
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="content-body">
                <h4 class="card-title mb-4">Your shopping cart</h4>
                <div class="row gy-3 mb-4">
                  <div class="col-lg-5">
                    <div class="itemside me-lg-5">
                      <div class="aside">
                        <img alt=""
                          src="images/items/11.jpg"
                          class="img-sm img-thumbnail"
                        />
                      </div>
                      <div class="info">
                        <a href="#/" class="title">
                          Winter jacket for men and lady
                        </a>
                        <p class="text-muted"> Yellow, Jeans </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <input
                      style={{width: "100px"}}
                      class="form-control"
                      type="number"
                      min="1"
                      value="1"
                    />
                  </div>
                  <div class="col-lg-2 col-sm-4 col-6">
                    <div class="price-wrap lh-sm">
                      <var class="price h6">$1156.00</var> <br />
                      <small class="text-muted"> $460.00 / per item </small>
                    </div>
                  </div>
                  <div class="col-lg col-sm-4">
                    <div class="float-lg-end">
                      <a href="#/" class="btn btn-light text-danger">
                        {" "}
                        Remove
                      </a>
                    </div>
                  </div>
                </div>

                <div class="row gy-3 mb-4">
                  <div class="col-lg-5">
                    <div class="itemside me-lg-5">
                      <div class="aside">
                        <img alt=""
                          src="images/items/12.jpg"
                          class="img-sm img-thumbnail"
                        />
                      </div>
                      <div class="info">
                        <a href="#/" class="title">
                          Mens T-shirt Cotton Base
                        </a>
                        <p class="text-muted"> Blue, Medium </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <input
                      style={{width: "100px"}}
                      class="form-control"
                      type="number"
                      min="1"
                      value="2"
                    />
                  </div>
                  <div class="col-lg-2 col-sm-4 col-6">
                    <div class="price-wrap lh-sm">
                      <var class="price h6">$44.80</var> <br />
                      <small class="text-muted"> $12.20 / per item </small>
                    </div>
                  </div>
                  <div class="col-lg col-sm-4">
                    <div class="float-lg-end">
                      <a href="#/" class="btn btn-light text-danger">
                        {" "}
                        Remove
                      </a>
                    </div>
                  </div>
                </div>

                <div class="row gy-3 mb-4">
                  <div class="col-lg-5">
                    <div class="itemside me-lg-5">
                      <div class="aside">
                        <img alt=""
                          src="images/items/13.jpg"
                          class="img-sm img-thumbnail"
                        />
                      </div>
                      <div class="info">
                        <a href="#/" class="title">
                          Blazer Suit Dress Jacket for Men
                        </a>
                        <p class="text-muted"> XL size, Jeans, Blue </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <input
                      style={{width: "100px"}}
                      class="form-control"
                      type="number"
                      min="1"
                      value="3"
                    />
                  </div>
                  <div class="col-lg-2 col-sm-4 col-6">
                    <div class="price-wrap lh-sm">
                      <var class="price h6">$1156.00</var> <br />
                      <small class="text-muted"> $460.00 / per item </small>
                    </div>
                  </div>
                  <div class="col-lg col-sm-4">
                    <div class="float-lg-end">
                      <a href="#/" class="btn btn-light text-danger">
                        {" "}
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <h5>Total: $1000</h5>
              </div>
            </div>

            <a href="payment.html" class="mt-3 btn btn-primary">
              Continue
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
