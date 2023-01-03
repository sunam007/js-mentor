import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setCourses(data);
        }
      });
  }, []);
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="mb-5">
        <p class=" display-6 fw-normal text-center">
          Courses Available on JS Mentor
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-3">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
