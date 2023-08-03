import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import PageTitle from "../PageTitle/PageTitle";
import "./SignUp.css";

const SignUp = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <body class="text-center">
      <PageTitle title="Sign Up"></PageTitle>

      <main class="form-signin">
        <form>
          <img class="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal">Create an Account</h1>

          <div class="form-floating mb-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-2">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-2">
            <input
              type="password"
              class="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
            />
            <label for="floatingConfirmPassword">Confirm Password</label>
          </div>

          <button
            onClick={handleFormSubmit}
            class="w-100 btn btn-lg btn-primary my-3"
            type="submit"
          >
            Register
          </button>
          <p>
            Already Registered ? Please{" "}
            <Link className="text-decoration-none" to="/login">
              Login
            </Link>
          </p>
        </form>
      </main>
    </body>
  );
};

export default SignUp;
