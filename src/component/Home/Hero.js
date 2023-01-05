import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.jpg";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigatae = useNavigate();
  const handleNavigateToCourses = () => {
    navigatae("/courses");
  };
  return (
    <div class="container col-xxl-10 px-4 py-4">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12 ">
          <img
            src={hero}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            // height="200"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <h1 class="display-5 fw-bold lh-1 mb-3 lh-base">
            Complete <br /> JavaScript Solution
          </h1>
          <p class="lead">
            Build your career as a Web Developer or an IOT Engineer with our
            expert JavaScript Mentors.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              onClick={handleNavigateToCourses}
              type="button"
              class="btn btn-primary btn-lg px-4 me-md-2"
            >
              See Our Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
