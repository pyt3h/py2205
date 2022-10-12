import Header from "components/Header";
function Success() {
  return (
    <>
      <Header/>

      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col">
            <h5 class="text-success">Your purchase has been success!</h5>
          </div>
        </div>
        <a href="list.html" class="mt-3 btn btn-primary">
          {" "}
          Continue shopping{" "}
        </a>
      </div>
    </>
  );
}

export default Success;
