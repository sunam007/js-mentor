import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="bg-white">
      <PageTitle title="Home" />
      <Hero />
      <PopularCourses />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
