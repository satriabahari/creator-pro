import Blog from "@/modules/blog";
import Container from "@/common/components/elements/Container";

const BlogPage = () => {
  return (
    <Container className="pb-28 pt-44">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-semibold lg:text-5xl" data-aos="zoom-in">
          <span className="text-gradient-color">Blogs</span>: From Creators to
          Creators
        </h1>
        <p
          className="text-sm text-neutral-400 lg:text-base"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Read articles, guides, and interviews with successful creators for
          inspiration.
        </p>
      </div>
      <Blog />
    </Container>
  );
};

export default BlogPage;
