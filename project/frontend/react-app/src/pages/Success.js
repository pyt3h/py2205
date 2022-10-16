import Header from "components/Header";
function Success() {
  return (
    <>
      <Header/>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <h5 className="text-success">Your purchase has been success!</h5>
          </div>
        </div>
        <a href="list.html" className="mt-3 btn btn-primary">
          {" "}
          Continue shopping{" "}
        </a>
      </div>
    </>
  );
}

export default Success;
