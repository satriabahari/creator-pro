import SectionHeading from "@/common/components/elements/SectionHeading";
import ValueList from "./ValueList";
import SubContainer from "@/common/components/elements/SubContainer";
import ButtonLabel from "@/common/components/elements/ButtonLabel";

const Value = () => {
  return (
    <SubContainer className="space-y-12 lg:space-y-16 lg:px-8" id="value">
      <SectionHeading
        label="Key Benefits for Creators"
        title="Why Choose Us?"
        description="Discover how CreatePro helps creators grow their community, generate income, and enhance their creativity."
        data-aos="fade-up"
        data-aos-anchor="#value"
      />
      <ValueList />
    </SubContainer>
  );
};

export default Value;
