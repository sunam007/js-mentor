import React from "react";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-light">
      <Hero />
      <PopularCourses />
      <Services />
    </div>
  );
};

export default Home;
