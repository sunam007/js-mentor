import React from "react";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses";

const Home = () => {
  return (
    <div className="bg-light">
      <Hero />
      <PopularCourses />
    </div>
  );
};

export default Home;
