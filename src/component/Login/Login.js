import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.css";

const Login = () => {
  return (
    <body class="text-center">
      <main class="form-signin">
        <form>
          <img class="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal">Please Login</h1>

          <div class="form-floating mb-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary my-2" type="submit">
            Login
          </button>
          <p>
            Not Registered Yet ? Please{" "}
            <Link className="text-decoration-none" to="/signup">
              Sign Up
            </Link>
          </p>
          <hr />
          <p>Or</p>
          <button className="w-100 btn btn-lg btn-outline-primary ">
            <i class="bi bi-google" style={{ fontSize: "20px" }}></i>
            <span className="text-muted ms-3">Sign In With Google</span>
          </button>
        </form>
      </main>
    </body>
  );
};

export default Login;
