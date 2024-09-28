import FaqList from "./FaqList";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SubContainer from "@/common/components/elements/SubContainer";

const Faq = () => {
  return (
    <SubContainer className="overflow-hidden lg:px-28" id="faq">
      <div className="rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 p-0.5">
        <div className="space-y-10 rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900 lg:p-16">
          <SectionHeading
            title="Frequently Ask Question"
            description="Find answers to common questions about our platform and how it supports your content creation journey."
            data-aos="fade-up"
            data-aos-anchor="#faq"
          />
          <FaqList />
          <p
            className="text-center text-sm text-neutral-700 dark:text-neutral-300"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-anchor="#faq"
          >
            More Question?{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text font-medium text-transparent">
              Contact us
            </span>
          </p>
        </div>
      </div>
    </SubContainer>
  );
};

export default Faq;
