import Header from "components/Header";
function UpdateProfile() {
  return (
    <>
      <Header/>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="card mt-3">
              <div className="content-body">
                <h4 className="card-title">Update Profile</h4>

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
            <a href="list.html" className="mt-3 btn btn-primary">
              {" "}
              Update{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
