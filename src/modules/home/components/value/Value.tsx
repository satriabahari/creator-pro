import SectionHeading from "@/common/components/elements/SectionHeading";
import ValueList from "./ValueList";
import SubContainer from "@/common/components/elements/SubContainer";
import ButtonLabel from "@/common/components/elements/ButtonLabel";

const Value = () => {
  return (
    <SubContainer className="flex items-center justify-center flex-col space-y-10 px-8" data-aos="fade-up">
      <ButtonLabel>The Value</ButtonLabel>
      <SectionHeading title="Value us" />
      <ValueList />
    </SubContainer>
  );
};

export default Value;
