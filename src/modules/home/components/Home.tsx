import Hero from "./hero/Hero";
import Blog from "./blog/Blog";
import Faq from "./faq/Faq";
import Testimonial from "./testimonial/Testimonial";
import Value from "./value/Value";
import Features from "./features/Features";
import CallToAction from "./cta/CallToAction";

const Home = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <Hero />
      <Value />
      <Features/>
      <Blog />
      <Testimonial />
      <Faq />
      <CallToAction/>
    </div>
  );
};

export default Home;
