import Hero from "./hero/Hero";
import Blog from "./blog/blog";
import Value from "./value/value";
import Testimonial from "./testimonial/testimonial";
import Faq from "./faq/faq";

const Home = () => {
  return (
    <div className="flex flex-col gap-[200px]">
      <Hero />
      <Value />
      <Blog />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
