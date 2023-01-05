import React from "react";

const Testimonials = () => {
  return (
    <div className="container col-xxl-10 p-5 mb-5">
      <div className="py-3">
        <p className=" display-6 fw-normal text-center ">
          What Student's say about JS Mentor's Courses
        </p>
        <hr />
      </div>

      <div className="row g-3">
        <div class="col-lg-4 col-sm-12 text-center">
          <img
            src="https://i.ibb.co/9yrB5DP/client-1.jpg"
            className=" rounded-circle "
            width={150}
            height={150}
            alt="client"
          />

          <h2 className="mt-3">Muhammad Nahiyan</h2>
          <p>
            Real life projects and assignment helped me understand the core
            concepts better. I have built several unique projects and now i am
            doing an intern as a Front End JavaScript Developer.
          </p>
        </div>
        <div class="col-lg-4 col-sm-12 text-center">
          <img
            src="https://i.ibb.co/X29fLr0/client2.jpg "
            className=" rounded-circle "
            width={150}
            height={150}
            alt="client"
          />

          <h2 className="mt-3">Sabreena Rashid</h2>
          <p>
            Animated classes helped me a lot to understand crucial topics. JS
            Mentor's support system is blazing fast. Mentor's proper guidence
            helped me become a successful programmer.
          </p>
        </div>
        <div class="col-lg-4 col-sm-12 text-center">
          <img
            src="https://i.ibb.co/GtyBssc/client3.jpg"
            className=" rounded-circle "
            width={150}
            height={150}
            alt=""
          />

          <h2 className="mt-3">Ehsanul Haque</h2>
          <p>
            I took the Robotics and Automation course and i never had to look
            back again. Now I am working as an Embedded Software Engineer in a
            reputed company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
