import React from "react";
import "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div class="container py-5 mt-5">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 mt-4 border-top fixed-bottom bg-light">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span class="fs-6 text-muted">© {year} , JS Mentor Ltd.</span>
        </div>

        <ul class="nav col-md-4 justify-content-end me-md-4 list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#">
              <i class="bi bi-twitter"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <i class="bi bi-youtube"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <i class="bi bi-facebook"></i>
            </a>
          </li>

          <li class="ms-3">
            <a class="text-muted" href="#">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
