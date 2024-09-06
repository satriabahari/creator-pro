import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";

const HomePage = () => {
  return (
    <Container backgroundGradient={true} className="pt-36 min-h-screen ">
      <Home />
    </Container>
  );
};

export default HomePage;
