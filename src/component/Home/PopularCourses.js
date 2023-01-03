import React from "react";
import jsFundamentals from "../../assets/images/courses/javascript-fundamental.png";
import fullStack from "../../assets/images/courses/fullstack.png";
import jhony5 from "../../assets/images/courses/Johnny-Five.jpg";

const PopularCourses = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="mb-5">
        <p class=" display-6 fw-normal text-center">
          Popular Courses on JS Mentor
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src={jsFundamentals} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Fundamentals of JavaScript</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={fullStack} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Full Stack Web Development </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={jhony5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                Robotics and Automation with JavaScript
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
