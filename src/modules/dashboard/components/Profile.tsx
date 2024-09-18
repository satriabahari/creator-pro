import Card from "@/common/components/elements/Card";
import SOSMED_ITEMS from "@/common/constants/sosmed";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const Profile = () => {
  const filteredSosmed = SOSMED_ITEMS.filter((item) => item.isShow);
  return (
    <Card
      className="col-span-1 row-span-1 flex flex-col justify-between gap-8 p-8 lg:col-span-3 lg:row-span-3"
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-anchor="#dashboard"
    >
      <div
        className="bg-gradient-color flex flex-col items-center gap-2 rounded-xl px-4 py-8"
        data-aos="zoom-in"
        data-aos-anchor="#dashboard"
      >
        <Image
          src={"/images/hero.jpg"}
          width={300}
          height={300}
          alt={"Profile Image"}
          className="h-24 w-24 rounded-full border-2 dark:border-neutral-50"
        />
        <div className="flex flex-col">
          <h4 className="font-medium text-neutral-900 dark:text-neutral-50">
            Satria Bahari
          </h4>
          <p className="text-xs text-neutral-700 dark:text-neutral-300">
            Web developer
          </p>
        </div>
        <div className="flex gap-2">
          <div className="rounded-full bg-neutral-300 p-2 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
            <FaYoutube />
          </div>
          <div className="rounded-full bg-neutral-300 p-2 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
            <FaYoutube />
          </div>
          <div className="rounded-full bg-neutral-300 p-2 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="space-y-8 overflow-hidden rounded-xl border-2 border-neutral-300 bg-gradient-to-b p-4 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900">
        <h3
          className="text-xl font-medium text-neutral-700 dark:text-neutral-300"
          data-aos="fade-down"
          data-aos-anchor="#dashboard"
        >
          Integrations
        </h3>
        <div className="flex flex-col gap-4">
          {filteredSosmed.map((sosmed, index) => (
            <div
              className="grid grid-cols-[2fr_1.7fr] items-center justify-between gap-4"
              key={index}
            >
              <div
                className="flex items-center gap-2"
                data-aos="fade-right"
                data-aos-delay={index * 100}
                data-aos-anchor="#dashboard"
              >
                <div
                  className={cn(
                    "rounded-full border-2 border-neutral-300 p-2 dark:border-neutral-700",
                    sosmed.className,
                  )}
                >
                  {sosmed.icon}
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {sosmed.title}
                </p>
              </div>
              <button
                className={cn(
                  "rounded-full bg-neutral-300 px-4 py-2 text-xs dark:bg-neutral-700",
                  sosmed.isActive && "bg-blue-500 dark:bg-blue-500",
                )}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                data-aos-anchor="#profile"
              >
                {sosmed.isActive ? "Connected" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Profile;
