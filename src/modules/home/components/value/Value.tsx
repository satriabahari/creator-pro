import SectionHeading from "@/common/components/elements/SectionHeading";
import ValueList from "./ValueList";
import SubContainer from "@/common/components/elements/SubContainer";
import ButtonLabel from "@/common/components/elements/ButtonLabel";

const Value = () => {
  return (
    <SubContainer className="space-y-20 px-8" id="value">
      <SectionHeading
        label="The Value"
        title="Value us"
        description="Turn your vision into reality in just 3 simple steps"
        data-aos="fade-up"
        data-aos-anchor="#value"
      />
      <ValueList />
    </SubContainer>
  );
};

export default Value;
