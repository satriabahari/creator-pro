import { TestimonialProps } from "@/common/types/testimonial";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  image,
  name,
  position,
  message,
}: TestimonialProps) => {
  return (
    <div className="space-y-5 rounded-2xl bg-neutral-200 p-6">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          width={40}
          height={40}
          alt={name}
          className="rounded-full"
        />
        <div className="">
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm">{position}</p>
        </div>
      </div>
      <div className="text-sm text-neutral-700">{message}</div>
    </div>
  );
};

export default TestimonialCard;
