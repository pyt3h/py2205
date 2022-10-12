import Header from "components/Header";
function Detail() {
  return (
    <>
      <Header/>

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
