import Button from "@/common/components/elements/Button";
import React from "react";
import {
  IoIosArrowBack as PreviousIcon,
  IoIosArrowForward as NextIcon,
} from "react-icons/io";
const Pagination = () => {
  return (
    <div id="pagination" className="flex items-center justify-between">
      <Button data-aos="fade-left">
        <PreviousIcon className="text-purple-500" />
        <div className="hidden lg:block">Previous</div>
      </Button>
      <div className="flex items-center gap-2">
        <Button
          data-aos="fade-up"
          data-aos-delay={1 * 100 + 100}
          data-aos-anchor="#pagination"
        >
          1
        </Button>
        <Button
          data-aos="fade-up"
          data-aos-delay={4 * 100 + 100}
          data-aos-anchor="#pagination"
        >
          ...
        </Button>
        <Button
          data-aos="fade-up"
          data-aos-delay={5 * 100 + 100}
          data-aos-anchor="#pagination"
        >
          10
        </Button>
      </div>
      <Button data-aos="fade-right">
        <div className="hidden lg:block">Next</div>
        <NextIcon className="text-yellow-500" />
      </Button>
    </div>
  );
};

export default Pagination;
