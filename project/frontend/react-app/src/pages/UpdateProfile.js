import Header from "components/Header";
function UpdateProfile() {
  return (
    <>
      <Header/>

      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col">
            <div class="card mt-3">
              <div class="content-body">
                <h4 class="card-title">Update Profile</h4>

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
            <a href="list.html" class="mt-3 btn btn-primary">
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
