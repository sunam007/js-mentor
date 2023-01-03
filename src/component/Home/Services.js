import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="container col-xxl-8 px-4 py-4">
      <div className="my-5">
        <p class=" display-6 fw-normal text-center">
          Reasons to choose JS Mentor Courses
        </p>
        <hr />
      </div>
      <div className="row">
        <div className="col-md col-lg-6">
          <div class="alert alert-primary " role="alert">
            <i class="bi bi-check-circle-fill"></i> Live and Recorded Classes
          </div>
        </div>
        <div className="col-md col-lg-6">
          <div class="alert alert-success" role="alert">
            <i class="bi bi-check-circle-fill"></i> Animated Concepts
          </div>
        </div>
        <div className="col-md col-lg-6">
          <div class="alert alert-info" role="alert">
            <i class="bi bi-check-circle-fill"></i> Real Life Projects and
            Assignments
          </div>
        </div>
        <div className="col-md col-lg-6">
          <div class="alert alert-primary" role="alert">
            <i class="bi bi-check-circle-fill"></i> MCQ Tests In Every Module
          </div>
        </div>
        <div className="col-md col-lg-6">
          <div class="alert alert-success" role="alert">
            <i class="bi bi-check-circle-fill"></i> Smart Notes
          </div>
        </div>
        <div className="col-md col-lg-6">
          <div class="alert alert-info" role="alert">
            <i class="bi bi-check-circle-fill"></i> Live Support Session
          </div>
        </div>
        <div className="col-md col-lg-6">
          <div class="alert alert-primary" role="alert">
            <i class="bi bi-check-circle-fill"></i> Lifetime Course Access
          </div>
        </div>
        <div className="col-md col-lg-6">
          <div class="alert alert-success" role="alert">
            <i class="bi bi-check-circle-fill"></i> Contents From Industry
            Experts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
