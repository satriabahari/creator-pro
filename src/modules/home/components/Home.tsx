import React from "react";
import Hero from "./hero/Hero";
import Value from "./value";
import Blog from "./blog";
import Testimonial from "./testimonial";
import Faq from "./faq";

const Home = () => {
  return (
    <div className="flex flex-col gap-[200px]">
      <Hero />
      <Value />
      <Blog />
      <Testimonial/>
      <Faq/>
    </div>
  );
};

export default Home;
