import React from "react";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <PopularCourses />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
