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
    <div className="mx-4 w-96 rounded-2xl bg-gradient-to-br p-0.5 from-purple-500 via-pink-500 to-yellow-500">
      <div className="space-y-5 rounded-2xl from-neutral-200 to-neutral-100 bg-gradient-to-b p-6 dark:from-neutral-800 dark:to-neutral-900">
        <div className="flex items-center gap-2">
          <Image
            src={image}
            width={40}
            height={40}
            alt={name}
            className="rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium dark:text-neutral-300">
              {name}
            </h3>
            <p className="text-sm dark:text-neutral-400">{position}</p>
          </div>
        </div>
        <div className="text-sm text-neutral-700 dark:text-neutral-400">
          {message}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
