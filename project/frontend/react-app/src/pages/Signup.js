function Signup() {
  return (
    <div class="container">
      <div
        class="card shadow mx-auto"
        style={{
          maxWidth: "400px",
          marginTop:"80px",
          marginBottom: "80px"
        }}
      >
        <div class="card-body">
          <h4 class="card-title mb-4">Sign up</h4>
          <form action="list.html">
            <div class="row gx-2">
              <div class="col mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Phone</label>
              <div class="row gx-2">
                <div class="col">
                  <input class="form-control" placeholder="Phone" type="text" />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Address</label>
              <div class="row gx-2">
                <div class="col">
                  <textarea
                    class="form-control"
                    placeholder="Address"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                class="form-control"
                placeholder="At least 6 characters."
                type="password"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Repeat password</label>
              <input class="form-control" placeholder="" type="password" />
            </div>
            <div class="mb-4">
              <button type="submit" class="btn btn-primary w-100">
                {" "}
                Sign up{" "}
              </button>
            </div>
          </form>
          <hr />
          <p class="text-center mb-2">
            Already have account?
            <a href="signin.html">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
