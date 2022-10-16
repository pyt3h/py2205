function Signin(){
    return (
      <div className="container">
        <div className="card shadow mx-auto" 
          style={{maxWidth:"400px", marginTop: "80px"}} >
          <div className="card-body">
            <h4 className="card-title mb-4">Sign in</h4>
            <form action="list.html">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" placeholder="Type email" type="text"/>
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input className="form-control" type="password"/>
              </div>
              <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100"> Login </button>
              </div>
            </form>
            <hr/>
            <p className="text-center mb-2">Do not have an account? <a href="signup.html">Sign up</a></p>
          </div> 
        </div>
      </div> 
    );
}

export default Signin;