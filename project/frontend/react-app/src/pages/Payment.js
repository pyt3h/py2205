import Header from "components/Header";
function Payment() {
  return (
    <>
      <Header/>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="content-body">
                <h4 className="card-title mb-4">Cart Review</h4>
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
                      value="1"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-2 col-sm-4 col-6">
                    <div className="price-wrap lh-sm">
                      <var className="price h6">$1156.00</var> <br />
                      <small className="text-muted"> $460.00 / per item </small>
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
                      value="2"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-2 col-sm-4 col-6">
                    <div className="price-wrap lh-sm">
                      <var className="price h6">$44.80</var> <br />
                      <small className="text-muted"> $12.20 / per item </small>
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
                      value="3"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-2 col-sm-4 col-6">
                    <div className="price-wrap lh-sm">
                      <var className="price h6">$1156.00</var> <br />
                      <small className="text-muted"> $460.00 / per item </small>
                    </div>
                  </div>
                </div>
                <h5>Total: $1000</h5>
              </div>
            </div>

            <div className="card mt-3">
              <div className="content-body">
                <h4 className="card-title"> Shipping info </h4>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label for="" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-6 mb-3">
                    <label for="" className="form-label">
                      Phone
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="mb-4">
                  <label for="" className="form-label">
                    Address
                  </label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-body">
                <h4 className="card-title">Payment method</h4>
                <div className="card">
                  <div className="card-header">
                    <input type="radio" name="payment_method" className="me-1" />{" "}
                    Cash on Delivery
                  </div>
                </div>
                <div className="card mt-2">
                  <div className="card-header">
                    <input type="radio" name="payment_method" className="me-1" />{" "}
                    Credit card
                  </div>
                  <div className="card-body">
                    <div className="row g-2">
                      <div className="col-sm-4">
                        <label className="form-label">Card number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                      </div>
                      <div className="col-sm-3">
                        <label className="form-label">Expiry date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="dd/yy"
                        />
                      </div>
                      <div className="col-sm-2">
                        <label className="form-label">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="cvc"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="success.html" className="mt-3 btn btn-primary">
              {" "}
              Make Purchase{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
