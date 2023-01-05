import React from "react";
import jsFundamentals from "../../assets/images/courses/javascript-fundamental.png";
import fullStack from "../../assets/images/courses/fullstack.png";
import jhony5 from "../../assets/images/courses/Johnny-Five.jpg";
import { useNavigate } from "react-router";

const PopularCourses = () => {
  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate("/dashboard");
  };
  return (
    <div className="container col-xxl-10 px-4 py-4">
      <div className="mb-5">
        <p class=" display-6 fw-normal text-center">
          Popular Courses on JS Mentor
        </p>
        <hr />
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={jsFundamentals} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-primary">
                Fundamentals of JavaScript
              </h5>
              <p className="">By: Syed Farhan </p>
              <p className="text-muted">Rating: 5/5</p>
              <p className="text-success">Price: 2000 BDT</p>
              <button
                onClick={handleEnroll}
                className="btn btn-outline-primary"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={fullStack} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-primary">
                Full Stack Web Development{" "}
              </h5>
              <p className="">By: Sumit Saha </p>
              <p className="text-muted">Rating: 5/5</p>
              <p className="text-success">Price: 4500 BDT</p>
              <button
                onClick={handleEnroll}
                className="btn btn-outline-primary"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={jhony5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-primary">
                Robotics and Automation with JavaScript
              </h5>
              <p className="">By: Syed Farhan </p>
              <p className="text-muted">Rating: 5/5</p>
              <p className="text-success">Price: 3500 BDT</p>
              <button
                onClick={handleEnroll}
                className="btn btn-outline-primary"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
