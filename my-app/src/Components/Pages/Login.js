import React, { useState } from "react";

const Login = () => {
  const [loginAs, setLoginCred] = useState({ email: "", password: "" });

  const handleEmailIdEntered = (event) => {
    setLoginCred({ ...loginAs, email: event.target.value });

    console.log(loginAs.email);
  };

  const handlePasswordEntered = (event) => {
    setLoginCred({ ...loginAs, password: event.target.value });
    console.log(loginAs.password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginAs.email);
    console.log(loginAs.password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center"> Sign In </h5>{" "}
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                    value={loginAs.email}
                    onChange={handleEmailIdEntered}
                  />
                  <label htmlFor="inputEmail"> Email address </label>{" "}
                </div>{" "}
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={loginAs.password}
                    onChange={handlePasswordEntered}
                  />
                  <label htmlFor="inputPassword"> Password </label>{" "}
                </div>{" "}
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember password{" "}
                  </label>{" "}
                </div>{" "}
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
