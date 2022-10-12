import Header from "components/Header";
function Payment() {
  return (
    <>
      <Header/>
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="content-body">
                <h4 class="card-title mb-4">Cart Review</h4>
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
                      value="1"
                      readOnly
                    />
                  </div>
                  <div class="col-lg-2 col-sm-4 col-6">
                    <div class="price-wrap lh-sm">
                      <var class="price h6">$1156.00</var> <br />
                      <small class="text-muted"> $460.00 / per item </small>
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
                      value="2"
                      readOnly
                    />
                  </div>
                  <div class="col-lg-2 col-sm-4 col-6">
                    <div class="price-wrap lh-sm">
                      <var class="price h6">$44.80</var> <br />
                      <small class="text-muted"> $12.20 / per item </small>
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
                      value="3"
                      readOnly
                    />
                  </div>
                  <div class="col-lg-2 col-sm-4 col-6">
                    <div class="price-wrap lh-sm">
                      <var class="price h6">$1156.00</var> <br />
                      <small class="text-muted"> $460.00 / per item </small>
                    </div>
                  </div>
                </div>
                <h5>Total: $1000</h5>
              </div>
            </div>

            <div class="card mt-3">
              <div class="content-body">
                <h4 class="card-title"> Shipping info </h4>
                <div class="row">
                  <div class="col-6 mb-3">
                    <label for="" class="form-label">
                      Name
                    </label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-6 mb-3">
                    <label for="" class="form-label">
                      Phone
                    </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="mb-4">
                  <label for="" class="form-label">
                    Address
                  </label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>

            <div class="card mt-3">
              <div class="card-body">
                <h4 class="card-title">Payment method</h4>
                <div class="card">
                  <div class="card-header">
                    <input type="radio" name="payment_method" class="me-1" />{" "}
                    Cash on Delivery
                  </div>
                </div>
                <div class="card mt-2">
                  <div class="card-header">
                    <input type="radio" name="payment_method" class="me-1" />{" "}
                    Credit card
                  </div>
                  <div class="card-body">
                    <div class="row g-2">
                      <div class="col-sm-4">
                        <label class="form-label">Card number</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                      </div>
                      <div class="col-sm-3">
                        <label class="form-label">Expiry date</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="dd/yy"
                        />
                      </div>
                      <div class="col-sm-2">
                        <label class="form-label">CVV</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="cvc"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="success.html" class="mt-3 btn btn-primary">
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
