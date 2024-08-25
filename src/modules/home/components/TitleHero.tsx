import React from "react";

const TitleHero = () => {
  return (
    <div className="flex flex-col items-center space-y-5 text-center">
      <h1 className="text-6xl font-bold text-neutral-800">
        Creatos, Lunch your <br />
        <span className="bg-gradient-to-r from-blue-600 via-fuchsia-500 to-rose-700 bg-clip-text text-transparent">
          knowledge business
        </span>{" "}
        in minutes
      </h1>
      <h5 className="w-2/3 text-neutral-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam expedita
        sapiente amet voluptatum praesentium aliquam.
      </h5>
    </div>
  );
};

export default TitleHero;
