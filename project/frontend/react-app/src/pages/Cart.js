import Header from "components/Header";
function Cart() {
  return (
    <>
      <Header/>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="content-body">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                <div className="row gy-3 mb-4">
                  <div className="col-lg-5">
                    <div className="itemside me-lg-5">
                      <div className="aside">
                        <img alt=""
                          src="images/items/11.jpg"
                          className="img-sm img-thumbnail"
                        />
                      </div>
                      <div className="info">
                        <a href="#/" className="title">
                          Winter jacket for men and lady
                        </a>
                        <p className="text-muted"> Yellow, Jeans </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <input
                      style={{width: "100px"}}
                      className="form-control"
                      type="number"
                      min="1"
                      value="1"
                    />
                  </div>
                  <div className="col-lg-2 col-sm-4 col-6">
                    <div className="price-wrap lh-sm">
                      <var className="price h6">$1156.00</var> <br />
                      <small className="text-muted"> $460.00 / per item </small>
                    </div>
                  </div>
                  <div className="col-lg col-sm-4">
                    <div className="float-lg-end">
                      <a href="#/" className="btn btn-light text-danger">
                        {" "}
                        Remove
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row gy-3 mb-4">
                  <div className="col-lg-5">
                    <div className="itemside me-lg-5">
                      <div className="aside">
                        <img alt=""
                          src="images/items/12.jpg"
                          className="img-sm img-thumbnail"
                        />
                      </div>
                      <div className="info">
                        <a href="#/" className="title">
                          Mens T-shirt Cotton Base
                        </a>
                        <p className="text-muted"> Blue, Medium </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <input
                      style={{width: "100px"}}
                      className="form-control"
                      type="number"
                      min="1"
                      value="2"
                    />
                  </div>
                  <div className="col-lg-2 col-sm-4 col-6">
                    <div className="price-wrap lh-sm">
                      <var className="price h6">$44.80</var> <br />
                      <small className="text-muted"> $12.20 / per item </small>
                    </div>
                  </div>
                  <div className="col-lg col-sm-4">
                    <div className="float-lg-end">
                      <a href="#/" className="btn btn-light text-danger">
                        {" "}
                        Remove
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row gy-3 mb-4">
                  <div className="col-lg-5">
                    <div className="itemside me-lg-5">
                      <div className="aside">
                        <img alt=""
                          src="images/items/13.jpg"
                          className="img-sm img-thumbnail"
                        />
                      </div>
                      <div className="info">
                        <a href="#/" className="title">
                          Blazer Suit Dress Jacket for Men
                        </a>
                        <p className="text-muted"> XL size, Jeans, Blue </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <input
                      style={{width: "100px"}}
                      className="form-control"
                      type="number"
                      min="1"
                      value="3"
                    />
                  </div>
                  <div className="col-lg-2 col-sm-4 col-6">
                    <div className="price-wrap lh-sm">
                      <var className="price h6">$1156.00</var> <br />
                      <small className="text-muted"> $460.00 / per item </small>
                    </div>
                  </div>
                  <div className="col-lg col-sm-4">
                    <div className="float-lg-end">
                      <a href="#/" className="btn btn-light text-danger">
                        {" "}
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <h5>Total: $1000</h5>
              </div>
            </div>

            <a href="payment.html" className="mt-3 btn btn-primary">
              Continue
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
