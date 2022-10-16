function Signup() {
  return (
    <div className="container">
      <div
        className="card shadow mx-auto"
        style={{
          maxWidth: "400px",
          marginTop:"80px",
          marginBottom: "80px"
        }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4">Sign up</h4>
          <form action="list.html">
            <div className="row gx-2">
              <div className="col mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <div className="row gx-2">
                <div className="col">
                  <input className="form-control" placeholder="Phone" type="text" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <div className="row gx-2">
                <div className="col">
                  <textarea
                    className="form-control"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                placeholder="At least 6 characters."
                type="password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Repeat password</label>
              <input className="form-control" placeholder="" type="password" />
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-primary w-100">
                {" "}
                Sign up{" "}
              </button>
            </div>
          </form>
          <hr />
          <p className="text-center mb-2">
            Already have account?
            <a href="signin.html">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
