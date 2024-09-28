import Home from "@/modules/home";
import Container from "@/common/components/elements/Container";

const HomePage = () => {
  return (
    <Container backgroundGradient={true} className="min-h-screen pt-36">
      <Home />
    </Container>
  );
};

export default HomePage;
