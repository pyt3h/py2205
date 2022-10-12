function Signin(){
    return (
      <div class="container">
        <div class="card shadow mx-auto" 
          style={{maxWidth:"400px", marginTop: "80px"}} >
          <div class="card-body">
            <h4 class="card-title mb-4">Sign in</h4>
            <form action="list.html">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input class="form-control" placeholder="Type email" type="text"/>
              </div>

              <div class="mb-4">
                <label class="form-label">Password</label>
                <input class="form-control" type="password"/>
              </div>
              <div class="mb-4">
                <button type="submit" class="btn btn-primary w-100"> Login </button>
              </div>
            </form>
            <hr/>
            <p class="text-center mb-2">Do not have an account? <a href="signup.html">Sign up</a></p>
          </div> 
        </div>
      </div> 
    );
}

export default Signin;