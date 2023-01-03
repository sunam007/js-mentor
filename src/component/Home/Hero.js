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
    <div class="container col-xxl-8 px-4 py-4">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={hero}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            // height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 lh-base">
            Complete <br /> JavaScript Solution
          </h1>
          <p class="lead">
            Build your career as a Web Developer or IOT engineer with our expert
            JavaScript Mentors.
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
