import React from "react";
import { useNavigate } from "react-router";

const Course = ({ course }) => {
  const { name, image, price, instructor, star } = course;
  const navigate = useNavigate();
  const handleEnroll = () => {
    navigate("/dashboard");
  };
  return (
    <div class="col">
      <div class="card h-100">
        <img src={image} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-primary">{name}</h5>
          <p className="">By: {instructor}</p>
          <p className="text-muted">Rating: {star}/5</p>
          <p className="text-success">Price: {price} BDT</p>

          <button onClick={handleEnroll} className="btn btn-outline-primary">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
