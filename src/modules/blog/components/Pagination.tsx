import Button from "@/common/components/elements/Button";
import React from "react";
import {
  IoIosArrowBack as PreviousIcon,
  IoIosArrowForward as NextIcon,
} from "react-icons/io";
const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      <Button>
        <PreviousIcon />
        <span>Previous</span>
      </Button>
      <div className="flex items-center gap-4">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
      <Button>
        <span>Next</span>
        <NextIcon />
      </Button>
    </div>
  );
};

export default Pagination;
