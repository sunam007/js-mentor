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
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                voluptas soluta quas fugit, dolore minus error voluptate beatae
                aliquid consectetur.
              </p>
              <button className="btn btn-outline-primary">Enroll Now</button>
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
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                doloribus excepturi perferendis consequuntur quisquam aut
                deserunt facere maiores libero mollitia!
              </p>
              <button className="btn btn-outline-primary">Enroll Now</button>
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
              <p class="card-text ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                pariatur libero ex eos quaerat consectetur, voluptates ipsam et
                eligendi saepe.
              </p>
              <button className="btn btn-outline-primary">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
