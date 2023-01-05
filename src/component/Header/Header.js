import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const handleLoginAndSignIn = () => {
    navigate("/login");
  };
  return (
    <header className="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <Link class="navbar-brand d-inline-flex align-items-center" to="/">
            <img
              src={logo}
              alt=""
              width="70"
              // height="24"
              class="d-inline-block align-text-top"
            />
            JS Mentor
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to="/support">
                  Support
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to="/classes">
                  My Class
                </NavLink>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <button
                onClick={handleLoginAndSignIn}
                class="btn btn-outline-primary"
              >
                Login / Sign Up
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
